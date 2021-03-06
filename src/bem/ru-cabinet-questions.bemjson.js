({
	block: 'template-page',
	title: 'Личный кабинет',
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
																	content: 'Персональные данные'
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
																	content: 'Текущие параметры'
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
																	content: 'Операции'
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
																	content: 'Задать вопрос'
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
																		'Выход'
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
																	content: 'Новый вопрос'
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
																	content: 'Все вопросы'
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
													text: 'Понять не могу, почему одни номера отображаются как основные а другие купленные? можно ли как то купленный перенести в основные? Хотите просмотреть или изменить свой заказ? На странице «Состояние заказа» вы можете проверить состояние заказа, отследить посылку, изменить адрес доставки .',
													answer: [
														'<strong>Отвечает Александр друзь:</strong>',
														'Здравствуйте! основные номера - это номера которые вы получили при покупле. купленные номера перенести нельзя'
													]
												},
												{
													date: '18/08/2015',
													text: 'Понять не могу, почему одни номера отображаются как основные а другие купленные? можно ли как то купленный перенести в основные? Хотите просмотреть или изменить свой заказ? На странице «Состояние заказа» вы можете проверить состояние заказа, отследить посылку, изменить адрес доставки .',
													answer: [
														'<strong>Отвечает Александр друзь:</strong>',
														'Здравствуйте! основные номера - это номера которые вы получили при покупле. купленные номера перенести нельзя'
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