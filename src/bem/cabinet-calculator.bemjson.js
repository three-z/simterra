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
													block: 'cabinet-calculator',
													content: [
														{
															block: 'cabinet-calculator-tabs',
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
																					attrs: {'href': '#cabinet-calculator-content-1'},
																					content: 'Вызовы'
																				}
																			]
																		},
																		{
																			elem: 'list-item',
																			tag: 'li',
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#cabinet-calculator-content-2'},
																					content: 'Интернет'
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															block: 'cabinet-calculator-content',
															content: [
																{
																	elem: 'list',
																	content: [
																		{
																			elem: 'list-item',
																			attrs: {'id': 'cabinet-calculator-content-1'},
																			content: [
																				{
																					block: 'cabinet-calculator-calls',
																					content: [
																						{
																							block: 'cabinet-calculator-calls-select',
																							content: [
																								{
																									elem: 'from',
																									content: [
																										{
																											tag: 'select',
																											content: [
																												{
																													tag: 'option',
																													attrs: {'value': '0'},
																													content: 'Таджикистан'
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
																									elem: 'to',
																									content: [
																										{
																											tag: 'select',
																											content: [
																												{
																													tag: 'option',
																													attrs: {'value': '0'},
																													content: 'Доминиканская республика'
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
																									elem: 'switch',
																									content: [
																										{
																											tag: 'a',
																											attrs: {'href': '#'},
																											content: 'Поменять местами'
																										}
																									]
																								}
																							]
																						},
																						{
																							block: 'calculator-calls-price',
																							content: [
																								{
																									elem: 'range',
																									content: [
																										{
																											tag: 'input',
																											attrs: {'type': 'text', 'value': '45'}
																										}
																									]
																								},
																								{
																									elem: 'title',
																									content: 'буду платить'
																								}
																							]
																						},
																						{
																							block: 'calculator-calls-list',
																							content: [
																								{
																									block: 'calculator-calls-list-item',
																									content: [
																										{
																											elem: 'type',
																											content: [
																												{
																													tag: 'img',
																													attrs: {'src': 'img/calculator-calls-list/icons/minutes.png'}
																												},
																												'Минуты'
																											]
																										}
																									]
																								}
																							]
																						},
																						{
																							block: 'calculator-calls-buy',
																							content: [
																								{
																									tag: 'a',
																									attrs: {'href': '#'},
																									content: 'Приобрести'
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
														'<input type="text" id="example_id" name="example_name" value="" />'
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