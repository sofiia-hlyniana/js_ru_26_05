import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE } from '../constants'

export function addComment(articleId, comment) {
	const id = Date.now()

	return {
		type: ADD_COMMENT,
		payload: {
			articleId,
			comment: {...comment, id}
		}
	}
}

//export function loadCommentsForArticle (id) {
//	return {
//		type: LOAD_COMMENTS_FOR_ARTICLE,
//		payload: { id }
//	}
//}