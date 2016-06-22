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
													mods : { 'active' : true },
													content : 'Выбери продукт'
												},
												{
													elem : 'list-item',
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
									block : 'order-select',
									content : [
										{
											block : 'order-select-slider',
											content : [
												{
													elem : 'list',
													content : [
														{
															elem : 'list-item',
															attrs : { 'data-slide' : '1', 'style': 'background-image: url(img/order-select-list/items/1.png);' },
															content : ''
														},
														{
															elem : 'list-item',
															attrs : { 'data-slide' : '2', 'style': 'background-image: url(img/order-select-list/items/2.png);' },
															content : ''
														},
														{
															elem : 'list-item',
															attrs : { 'data-slide' : '3', 'style': 'background-image: url(img/order-select-list/items/3.png);' },
															content : ''
														}
													]
												},
												{
													elem : 'previous',
													tag : 'a',
													attrs : { 'href' : '#' },
													content : 'Назад'
												},
												{
													elem : 'next',
													tag : 'a',
													attrs : { 'href' : '#' },
													content : 'Вперед'
												}
											]
										},
										{
											block : 'order-select-content',
											content : [
												{
													block : 'order-select-content-list',
													content : [
														{
															block : 'order-select-content-list-item',
															mods : { 'slide' : '1' },
															attrs : { 'id' : 'order-select-content-1' },
															content : [
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'Оформить заказ'
																		}
																	]
																},
																{
																	elem : 'text',
																	content : [
																		'<h3>SIMTERRA as a gift  – special for CAL clients</h3>',
																		'<strong>SIM карта:</strong> бесплатно <br>',
																		'<strong>Баланс:</strong> 20 € <br>',
																		'<strong>Стоимость:</strong> 20 € <br>',
																		'<small><i>Только для клиентов компании CAL</i></small> <br>',
																		'<br>',
																		'Вы клиент компании CAL? Закажите карту SIMterra с начальным балансом в 20 евро и получите саму карту стоимостью в 10 евро в подарок! <br>',
																		'Кроме того, вы получаете постоянную скидку в 50% на все услуги международной связи: звонки, SMS и интернет.'
																	]
																},
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'Оформить заказ'
																		}
																	]
																}
															]
														},
														{
															block : 'order-select-content-list-item',
															mods : { 'slide' : '1' },
															attrs : { 'id' : 'order-select-content-2' },
															content : [
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'Оформить заказ'
																		}
																	]
																},
																{
																	elem : 'text',
																	content : [
																		'<h3>Карта SIMterra с начальным балансом в 20 €</h3>',
																		'<strong>SIM карта:</strong> 10 € <br>',
																		'<strong>Баланс:</strong> 20 € <br>',
																		'<strong>Стоимость:</strong> 30 € <br>',
																		'<br>',
																		'Цена включает стоимость самой карты (10 евро) и наполнение карты на сумму в 20 евро. Вы сразу можете: звонить и принимать звонки, отправлять и получать SMS, пользоваться Интернетом. <br>',
																		'При этом вы можете проверить состояние баланса в любой момент и в случае необходимости пополнить его как через сайт, так и через USSD меню с вашего мобильного устройства без подключения к интернету.'
																	]
																},
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'Оформить заказ'
																		}
																	]
																}
															]
														},
														{
															block : 'order-select-content-list-item',
															mods : { 'slide' : '1' },
															attrs : { 'id' : 'order-select-content-3' },
															content : [
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'Оформить заказ'
																		}
																	]
																},
																{
																	elem : 'text',
																	content : [
																		'<h3>Карта SIMterra с нулевым балансом</h3>',
																		'<strong>SIM карта:</strong> 10 € <br>',
																		'<strong>Баланс:</strong> 0 € <br>',
																		'<strong>Стоимость:</strong> 10 € <br>',
																		'<br>',
																		'Чтобы начать пользоваться этой картой, вы должны пополнить ее баланс. Вы можете сделать это в любой момент самостоятельно как через сайт, так и через USSD меню с вашего мобильного устройства без подключения к интернету.'
																	]
																},
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'Оформить заказ'
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
})