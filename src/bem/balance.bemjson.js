({
	block: 'template-page',
	title: 'Пополнить баланс',
	content: [
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mods : { 'big-sidebar' : true },
					mix: { block: 'container' },
					content: [
						{
							elem : 'layout-left',
							content : [
								{
									block : 'sidebar',
									content : [
										{
											block : 'sidebar-auth',
											content : [
												{
													elem : 'description',
													content : '<strong style="color: #dd004e;">*</strong> В личном кабинете вы можете узнать все подробности о вашей симкарте'
												},
												{
													block : 'sidebar-auth-form',
													content : [
														{
															elem : 'form',
															tag : 'form',
															content : [
																{
																	elem : 'field',
																	content : [
																		{
																			elem : 'input',
																			tag: 'input',
																			mods : { 'login' : true },
																			attrs: { type: 'text', placeholder: 'Введите логин' }
																		}
																	]
																},
																{
																	elem : 'field',
																	content : [
																		{
																			elem : 'input',
																			tag: 'input',
																			mods : { 'password' : true },
																			attrs: { type: 'password', placeholder: 'Введите пароль' }
																		},
																		{
																			elem : 'show-password',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: [
																				'Показать пароль'
																			]
																		}
																	]
																},
																{
																	elem : 'controls',
																	content : [
																		{
																			tag: 'button',
																			attrs: { type: 'submit' },
																			content : 'Войти в личный кабинет'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem : 'register',
													content : '<strong style="color: #dd004e;">*</strong> Если у вас нет логина и пароля Вы можете <br><a href="#">ЗАРЕГИСТРИРОВАТЬСЯ</a> на сайте'
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
									block: 'balance',
									content: [
										{
											tag : 'h3',
											content : [
												{
													block : 'icon',
													tag: 'i',
													mods: { item: 'balance' },
													content : ''
												},
												' Баланс общий'
											]
										},
										'- Ваш баланс в личном кабинете распространяется на все купленные вами номера.<br>',
										'- Вам не надо беспокоиться что на каком то номере внезапно закончатся деньги.<br>',
										'<br><br>',
										{
											tag : 'h3',
											content : [
												{
													block : 'icon',
													tag: 'i',
													mods: { item: 'ussd' },
													content : ''
												},
												' USSD меню'
											]
										},
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'star' },
											content : ''
										},
										' <strong>111</strong> ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'grid' },
											content : ''
										},
										' ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'call' },
											content : ''
										},
										' - Активация стартовой суммы.<br>',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'star' },
											content : ''
										},
										' <strong>110</strong> ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'grid' },
											content : ''
										},
										' ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'call' },
											content : ''
										},
										' - Подробнее о вашем тарифе<br>',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'star' },
											content : ''
										},
										' <strong>102</strong> ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'grid' },
											content : ''
										},
										' ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'call' },
											content : ''
										},
										' - Активация стартовой суммы<br>',
										{
											elem : 'go',
											content : [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														'Перейти в раздел помощь и узнать все команды USSD меню'
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