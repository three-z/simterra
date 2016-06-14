({
	block: 'template-page',
	title: 'Помощь',
	content: [
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem : 'layout-left',
							content : [
								{
									block : 'sidebar',
									content : [
										{
											block : 'sidebar-navigation',
											content : [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'item',
															tag: 'li',
															mods: { 'active': true },
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Все разделы'
																}
															]
														},
														{
															elem: 'item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Что такое Simterrа?'
																}
															]
														},
														{
															elem: 'item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Заказ карты Simterra'
																}
															]
														},
														{
															elem: 'item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Особые условия для клиентов компании CAL'
																}
															]
														},
														{
															elem: 'item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Подключение карты'
																}
															]
														},
														{
															elem: 'item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Калькулятор'
																}
															]
														},
														{
															elem: 'item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Как звонить'
																}
															]
														},
														{
															elem: 'item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'USSD меню'
																}
															]
														},
														{
															elem: 'item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Подключение карты'
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
							elem : 'layout-right',
							content : [
								{
									block: 'help',
									content: [
										{
											block: 'help-list',
											content: [
												{
													title: 'Что такое Simterra',
													text: 'Карта SIMTERRA <br>Карта SIMTERRA + 10 евро на балансе <br>Карта SIMTERRA + 20 евро на балансе <br>(для клиентов компании Cal)'
												},
												{
													title: 'Заказ карты SIMTERRA',
													text: 'Где можно приобрести <br>Выбор карты <br>Варианты доставки <br>Оплата заказа'
												},
												{
													title: 'Что такое Simterra',
													text: 'Карта SIMTERRA <br>Карта SIMTERRA + 10 евро на балансе <br>Карта SIMTERRA + 20 евро на балансе <br>(для клиентов компании Cal)'
												},
												{
													title: 'Заказ карты SIMTERRA',
													text: 'Где можно приобрести <br>Выбор карты <br>Варианты доставки <br>Оплата заказа'
												},
												{
													title: 'Что такое Simterra',
													text: 'Карта SIMTERRA <br>Карта SIMTERRA + 10 евро на балансе <br>Карта SIMTERRA + 20 евро на балансе <br>(для клиентов компании Cal)'
												},
												{
													title: 'Заказ карты SIMTERRA',
													text: 'Где можно приобрести <br>Выбор карты <br>Варианты доставки <br>Оплата заказа'
												},
												{
													title: 'Что такое Simterra',
													text: 'Карта SIMTERRA <br>Карта SIMTERRA + 10 евро на балансе <br>Карта SIMTERRA + 20 евро на балансе <br>(для клиентов компании Cal)'
												},
												{
													title: 'Заказ карты SIMTERRA',
													text: 'Где можно приобрести <br>Выбор карты <br>Варианты доставки <br>Оплата заказа'
												}
											].map(function(item) {
												return {
													block: 'help-list-item',
													content: [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: [
																{
																	elem : 'info',
																	content : [
																		{
																			elem: 'title',
																			tag : 'h3',
																			content: item.title
																		},
																		{
																			elem: 'text',
																			content: item.text
																		}
																	]
																}
															]
														}
													]
												};
											})
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