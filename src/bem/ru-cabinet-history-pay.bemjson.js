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
															mods: {'active': true},
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
													block: 'cabinet-history',
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
															block: 'cabinet-history-title',
															content: [
																{
																	tag: 'h3',
																	content: 'История платежей'
																},
																{
																	block: 'cabinet-history-dates',
																	content: [
																		{
																			elem: 'from',
																			content: [
																				{
																					elem: 'label',
																					tag: 'label',
																					content: [
																						{
																							tag: 'input',
																							attrs: {'type': 'text', 'value': '', 'placeholder': '_ _ - _ _ - _ _ г.'}
																						},
																						{
																							block : 'icon',
																							tag: 'i',
																							mods: { item: 'calendar' },
																							content : ''
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'to',
																			content: [
																				{
																					elem: 'label',
																					tag: 'label',
																					content: [
																						{
																							tag: 'input',
																							attrs: {'type': 'text', 'value': '', 'placeholder': '_ _ - _ _ - _ _ г.'}
																						},
																						{
																							block : 'icon',
																							tag: 'i',
																							mods: { item: 'calendar' },
																							content : ''
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
															block: 'cabinet-history-pay-table',
															content: [
																{
																	block: 'cabinet-history-pay-table-header',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					mods: {'type': 'numbers'},
																					tag: 'li',
																					content: 'Способ пополнения / последние цифры'
																				},
																				{
																					elem: 'list-item',
																					mods: {'type': 'date'},
																					tag: 'li',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: [
																								{
																									block : 'icon',
																									tag: 'i',
																									mods: { item: 'sort-down' },
																									content : ''
																								},
																								'Дата'
																							]
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					mods: {'type': 'top'},
																					tag: 'li',
																					content: 'TOP UP'
																				}
																			]
																		}
																	]
																},
																{
																	block: 'cabinet-history-pay-table-body',
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
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
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
															block: 'cabinet-history-controls',
															content: [
																{
																	elem: 'save',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: { item: 'save' },
																					content : ''
																				},
																				'Сохранить'
																			]
																		}
																	]
																},
																{
																	elem: 'send',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: { item: 'send' },
																					content : ''
																				},
																				'Отправить на почту'
																			]
																		}
																	]
																},
																{
																	elem: 'print',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: { item: 'print' },
																					content : ''
																				},
																				'Распечатать'
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