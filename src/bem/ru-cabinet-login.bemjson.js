({
	block: 'template-page',
	title: 'Личный кабинет',
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
													content : '<span style="color: #dd004e;">*</span> В личном кабинете вы можете узнать все подробности о вашей симкарте'
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
													content : '* Если у вас нет логина и пароля Вы можете <br><a href="#">ЗАРЕГИСТРИРОВАТЬСЯ</a> на сайте'
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
									block: 'cabinet-login',
									content: [
										'<h3>Особые тарифы</h3>',
										'Simterra предоставляет максимально выгодные тарифы на роуминг для международных звонков, текстовых сообщений, получения и отправки данных, которые действуют в 216 странах мира. <br>Это делает ее идеальным спутником в путешествиях и является веским аргументом для того, чтобы ее взять за границу.<br>',
										'<br><br>',
										'<h3>Как работает simterra?</h3>',
										'Simterra крайне проста в использовании. Вы просто заменяете на время путешествия вашу обычную SIM-карту на карту simterra. При этом вы получаете в подарок три номера: американский, европейский и израильский. <br>Теперь ваши друзья в Израиле, Америке и Европе смогут разговаривать с вами по своим местным тарифам, причем независимо от вашего местонахождения.'
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