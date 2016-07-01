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
															mods: {'active': true},
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
											block: 'cabinet-questions-item',
											content: [
												{
													elem: 'layout',
													content: [
														{
															elem: 'layout-left',
															content: [
																{
																	block: 'cabinet-questions-item-form',
																	content: [
																		{
																			elem: 'form',
																			tag: 'form',
																			content: [
																				{
																					elem: 'text',
																					content: [
																						{
																							tag: 'label',
																							content: [
																								{
																									block : 'icon',
																									tag: 'i',
																									mods: { item: 'question' },
																									content : ''
																								},
																								'Ваше сообщение'
																							]
																						},
																						{
																							tag: 'textarea',
																							content: []
																						}
																					]
																				},
																				{
																					elem: 'note',
																					content: '<strong style="color: #DE1616;">*</strong> Здесь вы можете задать любой интересующий вас вопрос связанный с картой Simterra. Наши специалисты ответят на него как можно быстрее.'
																				},
																				{
																					elem : 'controls',
																					content : [
																						{
																							tag: 'button',
																							attrs: { type: 'submit' },
																							content : 'Отправить'
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
															elem: 'layout-right',
															content: [
																{
																	block: 'cabinet-questions-item-links',
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
																							attrs: { href: '#' },
																							content: 'Перейти в раздел помощь'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							tag: 'a',
																							attrs: { href: '#' },
																							content: 'USSD команды'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							tag: 'a',
																							attrs: { href: '#' },
																							content: 'Контакты'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							tag: 'a',
																							attrs: { href: '#' },
																							content: 'Наши продукты'
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
		}
	]
});