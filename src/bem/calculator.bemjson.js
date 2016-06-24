({
	block: 'template-page',
	title: 'Калькулятор',
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
											block: 'calculator-content-list',
											content: [
												{
													block: 'calculator-content-list-item',
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
												},
												{
													block: 'calculator-content-list-item',
													attrs: {'id': 'calculator-content-2'},
													content: [
														{
															block: 'calculator-internet',
															content: []
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
});