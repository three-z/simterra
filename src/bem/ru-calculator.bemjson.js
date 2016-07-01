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
							block: 'calculator',
							content: [
								{
									block: 'calculator-tabs',
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
															attrs: {'href': '#calculator-content-1'},
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
															attrs: {'href': '#calculator-content-2'},
															content: 'Интернет'
														}
													]
												}
											]
										}
									]
								},
								{
									block: 'calculator-content',
									content: [
										{
											elem: 'list',
											content: [
												{
													elem: 'list-item',
													mods: {'active': true},
													attrs: {'id': 'calculator-content-1'},
													content: [
														{
															block: 'calculator-calls',
															content: [
																{
																	block: 'calculator-calls-select',
																	content: [
																		{
																			elem: 'from',
																			content: [
																				{
																					elem: 'label',
																					tag: 'label',
																					content: 'Откуда'
																				},
																				{
																					elem: 'select',
																					tag: 'select',
																					mods: {'location': true},
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
																					elem: 'label',
																					tag: 'label',
																					content: 'Куда'
																				},
																				{
																					elem: 'select',
																					tag: 'select',
																					mods: {'location': true},
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
																	block: 'calculator-price',
																	content: [
																		{
																			elem: 'range',
																			content: [
																				{
																					tag: 'input',
																					attrs: {'type': 'text', 'value': ''}
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
																				},
																				{
																					elem: 'info',
																					content: [
																						{
																							elem: 'list',
																							content: [
																								{
																									elem: 'list-item',
																									content: [
																										'Для клиентов VISA CAl <strong>244</strong><br>',
																										'<small>0.2044 €/min</small><br>'
																									]
																								},
																								{
																									elem: 'list-item',
																									content: [
																										'Для клиентов <strong>195</strong><br>',
																										'<small>0.2044 €/min</small><br>'
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
																	block: 'calculator-buy',
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
												},
												{
													elem: 'list-item',
													attrs: {'id': 'calculator-content-2'},
													content: [
														{
															block: 'calculator-internet',
															content: [
																{
																	block: 'calculator-internet-select',
																	content: [
																		{
																			elem: 'label',
																			tag: 'label',
																			content: 'Выберите страну'
																		},
																		{
																			elem: 'select',
																			tag: 'select',
																			mods: {'location': true},
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
																	block: 'calculator-price',
																	content: [
																		{
																			elem: 'range',
																			content: [
																				{
																					tag: 'input',
																					attrs: {'type': 'text', 'value': ''}
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
																	block: 'calculator-internet-list',
																	content: [
																		{
																			block: 'calculator-internet-list-item',
																			content: [
																				{
																					elem: 'type',
																					content: [
																						{
																							tag: 'img',
																							attrs: {'src': 'img/calculator-internet-list/icons/traffic.png'}
																						},
																						'Трафик'
																					]
																				},
																				{
																					elem: 'info',
																					content: [
																						{
																							elem: 'list',
																							content: [
																								{
																									elem: 'list-item',
																									content: [
																										'Для клиентов VISA CAl <strong>244</strong><br>',
																										'<small>0.2044 €/min</small><br>'
																									]
																								},
																								{
																									elem: 'list-item',
																									content: [
																										'Для клиентов <strong>195</strong><br>',
																										'<small>0.2044 €/min</small><br>'
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'operator',
																					content: 'Оператор:  Grand BUSINESS'
																				}
																			]
																		},
																		{
																			block: 'calculator-internet-list-item',
																			content: [
																				{
																					elem: 'type',
																					content: [
																						{
																							tag: 'img',
																							attrs: {'src': 'img/calculator-internet-list/icons/traffic.png'}
																						},
																						'Трафик'
																					]
																				},
																				{
																					elem: 'info',
																					content: [
																						{
																							elem: 'list',
																							content: [
																								{
																									elem: 'list-item',
																									content: [
																										'Для клиентов VISA CAl <strong>244</strong><br>',
																										'<small>0.2044 €/min</small><br>'
																									]
																								},
																								{
																									elem: 'list-item',
																									content: [
																										'Для клиентов <strong>195</strong><br>',
																										'<small>0.2044 €/min</small><br>'
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'operator',
																					content: 'Оператор:  Grand BUSINESS'
																				}
																			]
																		}
																	]
																},
																{
																	block: 'calculator-buy',
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
								}
							]
						}
					]
				}
			]
		}
	]
});