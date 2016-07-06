({
	block: 'template-page',
	title: 'משרדים',
	rtl: true,
	lang: 'he',
	content: [
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mix: {block: 'container'},
					content: [
						{
							block: 'cabinet',
							content: [
								{
									block: 'cabinet-top',
									content: [
										{
											block: 'cabinet-imsi',
											content: [
												{
													tag: 'strong',
													content: 'IMSI:'
												},
												'7819 4516 1213 7890'
											]
										},
										{
											block: 'cabinet-navigation',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {href: '#'},
																	content: 'נתונים אישיים'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {href: '#'},
																	content: 'הגדרות נוכחיות'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {href: '#'},
																	content: 'פעולות'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															mods: {'active': true},
															content: [
																{
																	tag: 'a',
																	attrs: {href: '#'},
																	content: 'שאל שאלה'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {href: '#'},
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: {item: 'exit'},
																			content : ''
																		},
																		'יציאה'
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								{
									block: 'cabinet-questions',
									content: [
										{
											block: 'cabinet-questions-tabs',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content: 'שאלה חדשה'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															mods: {'active': true},
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content: 'כל הנושאים'
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'cabinet-questions-list',
											content : [
												{
													date: '18/08/2015',
													text: 'אני לא יכול להבין למה כמה מספרים מוצגים כראשי והשני קונה? האם ניתן להעביר את שנרכשו הראשי? אם אתה רוצה להציג או לשנות את ההזמנה? בדף "מצב ההזמנה" אתה יכול לבדוק את מצב הזמנה, מעקב אחר החבילה, לשנות את כתובת המשלוח.',
													answer: [
														'<strong>נפגש Александр друзь:</strong>',
														'ברוכים הבאים! חדרים בסיסיים - מספר כי שקיבלת בעת pokuple. מספרי קנה אינה ניתנת להעברה'
													]
												},
												{
													date: '18/08/2015',
													text: 'אני לא יכול להבין למה כמה מספרים מוצגים כראשי והשני קונה? האם ניתן להעביר את שנרכשו הראשי? אם אתה רוצה להציג או לשנות את ההזמנה? בדף "מצב ההזמנה" אתה יכול לבדוק את מצב הזמנה, מעקב אחר החבילה, לשנות את כתובת המשלוח.',
													answer: [
														'<strong>נפגש Александр друзь:</strong>',
														'ברוכים הבאים! חדרים בסיסיים - מספר כי שקיבלת בעת pokuple. מספרי קנה אינה ניתנת להעברה'
													]
												}
											].map(function(item) {
												return {
													block: 'cabinet-questions-list-item',
													content: [
														{
															elem: 'date',
															content: item.date
														},
														{
															elem: 'text',
															content: item.text
														},
														{
															elem: 'show',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content: [
																		{
																			elem: 'show-text-open',
																			tag: 'span',
																			content: 'Посмотреть ответ'
																		},
																		{
																			elem: 'show-text-close',
																			tag: 'span',
																			content: 'Скрыть ответ'
																		}
																	]
																}
															]
														},
														{
															elem: 'answer',
															content: item.answer
														}
													]
												};
											})
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
});