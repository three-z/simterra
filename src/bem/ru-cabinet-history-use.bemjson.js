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
															block: 'cabinet-history-tabs',
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
																					content: 'Все услуги'
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
																					attrs: {'href': '#'},
																					content: 'СМС'
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
																					content: 'Интернет'
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
																					content: 'DID'
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															block: 'cabinet-history-title',
															content: [
																{
																	block: 'cabinet-history-phone',
																	content: [
																		{
																			elem: 'select',
																			tag: 'select',
																			content: [
																				{
																					tag: 'option',
																					attrs: {'value': '+7 987 568- 56- 12'},
																					content: '+7 987 568- 56- 12'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '+7 987 568- 56- 13'},
																					content: '+7 987 568- 56- 13'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '+7 987 568- 56- 14'},
																					content: '+7 987 568- 56- 14'
																				}
																			]
																		}
																	]
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
																							attrs: {'type': 'text', 'value': '', 'placeholder': '9 9 - 9 9 - 9 9 г.'}
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
															block: 'cabinet-history-use-table',
															content: [
																{
																	block: 'cabinet-history-use-table-header',
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
																					mods: {'type': 'from'},
																					tag: 'li',
																					content: 'Откуда'
																				},
																				{
																					elem: 'list-item',
																					mods: {'type': 'to'},
																					tag: 'li',
																					content: 'Куда'
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
																					mods: {'type': 'time'},
																					tag: 'li',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: [
																								{
																									block : 'icon',
																									tag: 'i',
																									mods: { item: 'sort' },
																									content : ''
																								},
																								'Продолжительность'
																							]
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					mods: {'type': 'price'},
																					tag: 'li',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: [
																								{
																									block : 'icon',
																									tag: 'i',
																									mods: { item: 'sort' },
																									content : ''
																								},
																								'Стоимость'
																							]
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					mods: {'type': 'discount'},
																					tag: 'li',
																					content: 'Скидка'
																				},
																				{
																					elem: 'list-item',
																					mods: {'type': 'total'},
																					tag: 'li',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: [
																								{
																									block : 'icon',
																									tag: 'i',
																									mods: { item: 'sort' },
																									content : ''
																								},
																								'Итого'
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	block: 'cabinet-history-use-table-body',
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
																									mods: {item: 'phone-in'},
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
																							mods: {'type': 'from'},
																							content: 'IL Israil'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'to'},
																							content: 'Bulgaria'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'time'},
																							content: '0: 22: 15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'price'},
																							content: '0.32 €'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'discount'},
																							content: '50%'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'total'},
																							content: '0.16 €'
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
																									mods: {item: 'phone-out'},
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
																							mods: {'type': 'from'},
																							content: 'IL Israil'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'to'},
																							content: 'Bulgaria'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'time'},
																							content: '0: 22: 15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'price'},
																							content: '0.32 €'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'discount'},
																							content: '50%'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'total'},
																							content: '0.16 €'
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
																									mods: {item: 'sms-in'},
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
																							mods: {'type': 'from'},
																							content: 'IL Israil'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'to'},
																							content: 'Bulgaria'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'time'},
																							content: '0: 22: 15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'price'},
																							content: '0.32 €'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'discount'},
																							content: '50%'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'total'},
																							content: '0.16 €'
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
																									mods: {item: 'sms-out'},
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
																							mods: {'type': 'from'},
																							content: 'IL Israil'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'to'},
																							content: 'Bulgaria'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'time'},
																							content: '0: 22: 15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'price'},
																							content: '0.32 €'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'discount'},
																							content: '50%'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'total'},
																							content: '0.16 €'
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
																									mods: {item: 'www'},
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
																							mods: {'type': 'from'},
																							content: 'IL Israil'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'to'},
																							content: 'Bulgaria'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'time'},
																							content: '0: 22: 15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'price'},
																							content: '0.32 €'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'discount'},
																							content: '50%'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'total'},
																							content: '0.16 €'
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
																									mods: {item: 'did'},
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
																							mods: {'type': 'from'},
																							content: 'IL Israil'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'to'},
																							content: 'Bulgaria'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'time'},
																							content: '0: 22: 15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'price'},
																							content: '0.32 €'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'discount'},
																							content: '50%'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'total'},
																							content: '0.16 €'
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