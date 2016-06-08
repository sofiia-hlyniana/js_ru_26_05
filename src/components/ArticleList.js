import React, {PropTypes, Component} from 'react';
import {findDOMNode} from 'react-dom';
import Article from './Article';
import Chart from './Chart';
import oneOpen from '../decorators/oneOpen';
import Select from 'react-select';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import 'react-select/dist/react-select.css'

class ArticleList extends Component {
  
  state = {
    selected: null,
    from: null,
    to: null
  };

  componentDidMount() {
    console.log('---', 2);
    console.log('---', findDOMNode(this.refs.chart));
  }

  render() {
    const {articles, isOpen, openItem} = this.props;
    const {from, to} = this.state;

    const articleItems = articles.map((article) => <li key={article.id}>
      <Article article={article}
               isOpen={isOpen(article.id)}
               openArticle={openItem(article.id)}
      />
    </li>);

    const options = articles.map((article) => ({
      label: article.title,
      value: article.id
    }));

    return (
        <div>
          <ul>
            {articleItems}
          </ul>
          <Chart ref="chart"/>
          <div className="datePickerResult">{this.getDateMessage()}</div>
          <DayPicker
              ref="daypicker"
              numberOfMonths={2}
              selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
              onDayClick={this.setDateRange.bind(this)}
          />
          <Select
              options={options}
              onChange={this.handleChange}
              value={this.state.selected}
              multi={true}
          />
        </div>
    )
  }

  handleChange = (selected) => {
    this.setState({
      selected
    })
  };

  setDateRange(e, day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  getDateMessage = () => {
    const {from, to} = this.state;
    if (from && to) return `you've selected dates between ${from.toLocaleDateString()} and ${to.toLocaleDateString()}`;
    else return null;
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  isOpen: PropTypes.func.isRequired,
  openItem: PropTypes.func.isRequired
};

export default oneOpen(ArticleList)