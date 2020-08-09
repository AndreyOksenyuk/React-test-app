import React from 'react';
import style from './NewsPost.module.scss'

const NewsPost = (props) => {

	return (
		<div>
			{props.news.map((news, i) => {
				return (
					<div key={news.publishedAt + i} className={style.newsPost}>
						<h3 className={style.newsPost__title}><span>{i + 1}. </span>{news.title}</h3>
						<div className={style.content}>
							<a href={news.url} target="_blank" rel="noreferrer noopener">
								<img src={news.urlToImage} alt="img" className={style.img}/>
							</a> 
							<div className={style.text}>{news.description}</div>
						</div>
						<p 
							className={style.newsPost__author}>
							<b>Автор: </b>{news.author ? news.author : 'не указан'}
						</p>
						<i className={style.newsPost__date}><b>Дата: </b>{news.publishedAt.replace(/[a-z]/gi, ' ')}</i>
						<div className={style.linkToSource}>
							<b>Читать на: </b>
							<a href={news.url} target="_blank" rel="noreferrer noopener">{news.source.name}</a>
						</div>
					</div>
				)
			})
			}
		</div>
	);
}

export default NewsPost;
