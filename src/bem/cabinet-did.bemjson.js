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
									block: 'content',
									elem: 'layout',
									content: [
										{
											elem: 'layout-left',
											content: [
												{
													block: 'sidebar',
													content: [
														{
															block: 'sidebar-navigation',
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
																					attrs: {href: '#'},
																					content: 'История использования'
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
																					content: 'История платежей'
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
																					content: 'Пополнить баланс'
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
																					content: 'Калькулятор'
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
																					content: 'Купить DID'
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
										},
										{
											elem: 'layout-right',
											content: [
												{
													block: 'cabinet-did',
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
															content: 'Приобрести новый временный номер'
														},
														{
															elem: 'layout',
															content: [
																{
																	elem: 'layout-left',
																	content: [
																		{
																			block: 'cabinet-did-select',
																			content: [
																				{
																					elem : 'form',
																					tag : 'form',
																					content : [
																						{
																							elem : 'field',
																							content : [
																								{
																									tag: 'select',
																									content: [
																										{
																											tag: 'option',
																											attrs: {'value': ''},
																											content: 'Выберите страну'
																										},
																										{
																											tag: 'option',
																											attrs: {'value': '1'},
																											content: 'Россия'
																										}
																									]
																								}
																							]
																						},
																						{
																							elem : 'field',
																							content : [
																								{
																									tag: 'select',
																									content: [
																										{
																											tag: 'option',
																											attrs: {'value': ''},
																											content: 'Выберите город'
																										},
																										{
																											tag: 'option',
																											attrs: {'value': '1'},
																											content: 'Москва'
																										}
																									]
																								}
																							]
																						},
																						{
																							elem : 'field',
																							content : [
																								{
																									tag: 'select',
																									content: [
																										{
																											tag: 'option',
																											attrs: {'value': ''},
																											content: 'Срок действия DID'
																										},
																										{
																											tag: 'option',
																											attrs: {'value': '1'},
																											content: '1 год'
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
																},
																{
																	elem: 'layout-right',
																	content: [
																		{
																			block: 'cabinet-did-info',
																			content: [
																				{
																					elem: 'list',
																					tag: 'ul',
																					content: [
																						{
																							elem: 'list-item',
																							tag: 'li',
																							content: 'Абонплата (Месяц): <strong>100.8306 €</strong>'
																						},
																						{
																							elem: 'list-item',
																							tag: 'li',
																							content: 'Стоимость за весь срок: <strong>100.8306 €</strong>'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'cabinet-did-buy',
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content: 'Купить DID'
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