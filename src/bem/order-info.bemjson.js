({
	block: 'template-page',
	title: 'Заказать СИМ карту',
	content: [
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'order',
							content: [
								{
									block : 'order-steps',
									content : [
										{
											elem : 'list',
											content : [
												{
													elem : 'list-item',
													content : 'Выбери продукт'
												},
												{
													elem : 'list-item',
													mods : { 'active' : true },
													content : 'Оформить заказ'
												},
												{
													elem : 'list-item',
													content : 'Завершить заказ'
												}
											]
										},
									]
								},
								{
									block : 'order-info',
									content : [
										{
											block : 'order-info-list',
											content : [
												{
													tag : 'h3',
													content : 'Ваш заказ'
												},
												{
													block : 'order-info-list',
													content : [
														{
															block : 'order-info-list-item',
															content : [
																{
																	elem : 'image',
																	content : [
																		{
																			tag: 'img',
																			attrs: { 'src': 'img/order-info-list/items/1.png' }
																		}
																	]
																},
																{
																	elem : 'price',
																	content : 'Симкарта - 20 € ; На балансе - 10 €'
																},
																{
																	elem : 'delete',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'Удалить'
																		}
																	]
																}
															]
														}
													]
												},
												{
													tag : 'h4',
													content : [
														{
															tag : 'span',
															content : '1'
														}
													]
												},
												{
													tag : 'h3',
													content : 'Ваши персональные данные'
												},
												{
													block : 'order-info-form',
													content : [
														{
															elem : 'confidentiality',
															content : '* Внимание! Мы соблюдаем политику конфиденциальности и не передадим ваши данные третьим лицам'
														},
														{
															elem : 'form',
															tag : 'form',
															content : [
																{
																	elem : 'row',
																	content : [
																		{
																			elem : 'field',
																			content : [
																				{
																					elem : 'label',
																					tag : 'label',
																					content : [
																						{
																							elem : 'placeholder',
																							content : 'Ф.И.О.:'
																						},
																						{
																							elem : 'input',
																							tag: 'input',
																							attrs: { type: 'text' }
																						}
																					]
																				}
																			]
																		},
																		{
																			elem : 'field',
																			content : [
																				{
																					elem : 'label',
																					tag : 'label',
																					content : [
																						{
																							elem : 'placeholder',
																							content : 'Мобильный телефон:'
																						},
																						{
																							elem : 'input',
																							tag: 'input',
																							attrs: { type: 'text' }
																						}
																					]
																				}
																			]
																		},
																		{
																			elem : 'field',
																			content : [
																				{
																					elem : 'label',
																					tag : 'label',
																					content : [
																						{
																							elem : 'placeholder',
																							content : 'Email:'
																						},
																						{
																							elem : 'input',
																							tag: 'input',
																							attrs: { type: 'text' }
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem : 'row',
																	content : [
																		{
																			elem : 'field',
																			content : [
																				{
																					elem : 'label',
																					tag : 'label',
																					content : [
																						{
																							elem : 'placeholder',
																							content : '№ удоставерения личности:'
																						},
																						{
																							elem : 'input',
																							tag: 'input',
																							attrs: { type: 'text' }
																						}
																					]
																				}
																			]
																		},
																		{
																			elem : 'field',
																			mods : { 'columns' : '2' },
																			content : [
																				{
																					elem : 'label',
																					tag : 'label',
																					content : [
																						{
																							elem : 'placeholder',
																							content : 'Адрес места жительства:'
																						},
																						{
																							elem : 'input',
																							tag: 'input',
																							attrs: { 'type': 'text', 'placeholder': '(индекс, страна, область, город, район, улица, дом, квартира)' }
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem : 'row',
																	content : [
																		{
																			elem : 'field',
																			content : [
																				{
																					elem : 'label',
																					tag : 'label',
																					content : [
																						{
																							elem : 'placeholder',
																							content : 'Дата вылета:'
																						},
																						{
																							elem : 'input',
																							tag: 'input',
																							attrs: { 'type': 'text', 'placeholder': '__.__.____' }
																						}
																					]
																				}
																			]
																		},
																		{
																			elem : 'field',
																			content : [
																				{
																					elem : 'label',
																					tag : 'label',
																					content : [
																						{
																							elem : 'placeholder',
																							content : 'Дата возвращения:'
																						},
																						{
																							elem : 'input',
																							tag: 'input',
																							attrs: { 'type': 'text', 'placeholder': '__.__.____' }
																						}
																					]
																				}
																			]
																		},
																		{
																			elem : 'field',
																			content : [
																				{
																					elem : 'note',
																					content : '<span style="color: #f80000;">*</span> Если вы незнаете точные даты поездки, то можете указать предполагаемые'
																					ktiitioyppypor[rpi95656o60rt8uy6r
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
													tag : 'h4',
													content : [
														{
															tag : 'span',
															content : '2'
														}
													]
												},
												{
													tag : 'h3',
													content : 'Выберите вариант доставки'
												},
												{
													block : 'order-info-delivery',
													content : [

													]
												},
												{
													tag : 'h4',
													content : [
														{
															tag : 'span',
															content : '3'
														}
													]
												},
												{
													block : 'order-info-total',
													content : [

													]
												},
												{
													block : 'order-info-pay',
													content : [

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
})