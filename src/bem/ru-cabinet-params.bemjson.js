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
															mods: {'active': true},
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
									block: 'cabinet-params',
									content: [
										{
											block: 'cabinet-balance-info',
											content: [
												{
													elem: 'text',
													content: 'Текущий баланс: <strong>1003 €</strong>'
												},
												{
													elem: 'refill',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: 'Пополнить'
														}
													]
												}
											]
										},
										{
											tag: 'h3',
											content: 'Постоянные номера:'
										},
										{
											block: 'cabinet-params-table',
											content: [
												{
													block: 'cabinet-params-table-header',
													content: [
														{
															elem: 'list',
															tag: 'ul',
															content: [
																{
																	elem: 'list-item',
																	mods: {'type': 'icon'},
																	tag: 'li',
																	content: '&nbsp;'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'phone'},
																	tag: 'li',
																	content: 'Номер телефона'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'country'},
																	tag: 'li',
																	content: 'Страна'
																}
															]
														}
													]
												},
												{
													block: 'cabinet-params-table-body',
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
																			elem: 'list-cell',
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag: 'li',
																	content: [
																		{
																			elem: 'list-cell',
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag: 'li',
																	content: [
																		{
																			elem: 'list-cell',
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
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
											tag: 'h3',
											content: 'Временные номера:'
										},
										{
											block: 'cabinet-params-table',
											content: [
												{
													block: 'cabinet-params-table-header',
													content: [
														{
															elem: 'list',
															tag: 'ul',
															content: [
																{
																	elem: 'list-item',
																	mods: {'type': 'icon'},
																	tag: 'li',
																	content: '&nbsp;'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'phone'},
																	tag: 'li',
																	content: 'Номер телефона'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'country'},
																	tag: 'li',
																	content: 'Страна'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'date-start'},
																	tag: 'li',
																	content: 'Дата покупки'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'date-end'},
																	tag: 'li',
																	content: 'Дата окончания'
																}
															]
														}
													]
												},
												{
													block: 'cabinet-params-table-body',
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
																			elem: 'list-cell',
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-start'},
																			content: '17/01/2016'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-end'},
																			content: '18/01/2016'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag: 'li',
																	content: [
																		{
																			elem: 'list-cell',
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-start'},
																			content: '17/01/2016'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-end'},
																			content: '18/01/2016'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag: 'li',
																	content: [
																		{
																			elem: 'list-cell',
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-start'},
																			content: '17/01/2016'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-end'},
																			content: '18/01/2016'
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