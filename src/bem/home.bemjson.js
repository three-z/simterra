({
	block: 'template-page',
	homepage: true,
	content: [
		{
			block: 'content',
			content: [
				{
					block: 'home-slider',
					content: [
						{
							block : 'home-slider-list',
							content : [
								{
									img: 'img/home-slider-list/slides/1.jpg'
								},
								{
									img: 'img/home-slider-list/slides/2.jpg'
								}
							].map(function(item) {
								return {
									block: 'home-slider-list-item',
									attrs: { 'style': 'background-image: url(' + item.img + ');' },
									content: ''
								};
							})
						},
						{
							block : 'home-slider-text',
							content : [
								{
									elem : 'title',
									content : 'СИМКАРТА ДЛЯ ПОЕЗДОК ЗА ГРАНИЦУ'
								},
								{
									elem : 'button',
									content : [
										{
											tag : 'a',
											attrs: { href: '#' },
											content : [
												{
													block : 'icon',
													tag: 'i',
													mods: { item: 'molecule' },
													content : ''
												},
												'Заказать сейчас'
											]
										}
									]
								}
							]
						}
					]
				},
				{
					block : 'home-advantages',
					content : [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block : 'home-advantages-tabs',
									content : [
										{
											elem: 'list',
											tag: 'ul',
											content: [
												{
													title: 'Полный контроль и свобода',
													class: 'control'
												},
												{
													title: 'Льготные тарифы для клиентов CAL',
													class: 'cal'
												},
												{
													title: 'Локальные номера в 60-ти странах',
													class: 'local'
												},
												{
													title: 'Горячая линия для связи с CAL',
													class: 'hot'
												}
											].map(function(item) {
												return {
													elem: 'list-item',
													tag : 'li',
													mods : { item : item.class },
													content: [
														{
															tag: 'a',
															attrs: { 'href': '#home-advantages-' + item.class },
															content: item.title
														}
													]
												};
											})
										}
									]
								},
								{
									block : 'home-advantages-hide',
									content : [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: 'скрыть'
										}
									]
								},
								{
									block : 'home-advantages-list',
									content : [
										{
											title: 'Возможность легко пополнить баланс без интернета (через USSD меню).',
											text: 'По логике вещей должно открываться что-то типа "подробнее" без перехода на другую страницу, чтобы потом можно было бы посмотреть/перейти  на соседний пункт. Не хотелось бы их выпускать на другую страницу. Но пока не понимаю, как это сделать, не утяжелив страницу. Или достаточно того, как есть? Надо подумать. <br>Есть еще вариант, просто писать текст снизу, если не желательно отпускать на другую страницу. Просто напишите потом, как решите, какой вариант',
											class: 'control'
										},
										{
											title: 'Возможность легко пополнить баланс без интернета (через USSD меню).',
											text: 'По логике вещей должно открываться что-то типа "подробнее" без перехода на другую страницу, чтобы потом можно было бы посмотреть/перейти  на соседний пункт. Не хотелось бы их выпускать на другую страницу. Но пока не понимаю, как это сделать, не утяжелив страницу. Или достаточно того, как есть? Надо подумать. <br>Есть еще вариант, просто писать текст снизу, если не желательно отпускать на другую страницу. Просто напишите потом, как решите, какой вариант',
											class: 'cal'
										},
										{
											title: 'Возможность легко пополнить баланс без интернета (через USSD меню).',
											text: 'По логике вещей должно открываться что-то типа "подробнее" без перехода на другую страницу, чтобы потом можно было бы посмотреть/перейти  на соседний пункт. Не хотелось бы их выпускать на другую страницу. Но пока не понимаю, как это сделать, не утяжелив страницу. Или достаточно того, как есть? Надо подумать. <br>Есть еще вариант, просто писать текст снизу, если не желательно отпускать на другую страницу. Просто напишите потом, как решите, какой вариант',
											class: 'local'
										},
										{
											title: 'Возможность легко пополнить баланс без интернета (через USSD меню).',
											text: 'По логике вещей должно открываться что-то типа "подробнее" без перехода на другую страницу, чтобы потом можно было бы посмотреть/перейти  на соседний пункт. Не хотелось бы их выпускать на другую страницу. Но пока не понимаю, как это сделать, не утяжелив страницу. Или достаточно того, как есть? Надо подумать. <br>Есть еще вариант, просто писать текст снизу, если не желательно отпускать на другую страницу. Просто напишите потом, как решите, какой вариант',
											class: 'hot'
										}
									].map(function(item) {
										return {
											block : 'home-advantages-list-item',
											attrs: { id: 'home-advantages-' + item.class },
											content : [
												{
													elem : 'title',
													tag : 'h3',
													content : item.title
												},
												{
													elem : 'text',
													content : item.text
												},
												{
													elem : 'more',
													content : [
														{
															tag: 'a',
															attrs: { 'href': '#' },
															content: 'Смотреть подробнее'
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
				},
				{
					block : 'home-elements',
					content : [
						{
							elem: 'layout',
							mix: { block: 'container', mods: { 'no-padding': true } },
							content: [
								{
									block : 'home-elements-list',
									content : [
										{
											block : 'home-elements-list-item',
											content : [
												{
													block: 'home-navigation',
													content: [
														{
															elem: 'list',
															tag : 'ul',
															content: [
																{
																	elem: 'list-item',
																	tag : 'li',
																	mods: { 'active': true },
																	attrs: { 'data-slide': '0' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Калькулятор'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '1' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Пополнить баланс'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '2' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Особые мероприятия'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block : 'home-calculator',
													content : [
														{
															elem: 'layout',
															content: [
																{
																	elem: 'layout-left',
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
																			block: 'home-calculator-go',
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content: 'Перейти к калькулятору'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'layout-right',
																	content: [
																		{
																			block: 'home-calculator-list',
																			content: [
																				{
																					block: 'home-calculator-list-item',
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
																												'<strong>244</strong> Для клиентов VISA CAl<br>',
																												'<small>0.2044 €/min</small><br>'
																											]
																										},
																										{
																											elem: 'list-item',
																											content: [
																												'<strong>195</strong> Для клиентов<br>',
																												'<small>0.2044 €/min</small><br>'
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					block: 'home-calculator-list-item',
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
																												'<strong>244</strong> Для клиентов VISA CAl<br>',
																												'<small>0.2044 €/min</small><br>'
																											]
																										},
																										{
																											elem: 'list-item',
																											content: [
																												'<strong>195</strong> Для клиентов<br>',
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
											block : 'home-elements-list-item',
											content : [
												{
													block: 'home-navigation',
													content: [
														{
															elem: 'list',
															tag : 'ul',
															content: [
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '0' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Калькулятор'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	mods: { 'active': true },
																	attrs: { 'data-slide': '1' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Пополнить баланс'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '2' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Особые мероприятия'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block : 'home-balance',
													content : [
														{
															elem: 'layout',
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
																							content : '<strong style="color: #dd004e;">*</strong> Для пополнения баланса с сайта необходимо авторизоваться'
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
																													content : 'Авторизоваться'
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
																			block: 'home-balance-content',
																			content: [
																				{
																					tag : 'h3',
																					content : 'Особые тарифы'
																				},
																			  'Simterra предоставляет максимально выгодные тарифы на роуминг для международных звонков, текстовых сообщений, получения и отправки данных, которые действуют в 216 странах мира. <br>',
																			  'Это делает ее идеальным спутником в путешествиях и является веским аргументом для того, чтобы ее взять за границу.<br>',
																				'<br><br>',
																				{
																					tag : 'h3',
																					content : 'Как работает simterra?'
																				},
																				'Simterra крайне проста в использовании. Вы просто заменяете на время путешествия вашу обычную SIM-карту на карту simterra. При этом вы получаете в подарок три номера: американский, европейский и израильский.    Теперь ваши друзья в Израиле, Америке и Европе смогут разговаривать с вами по своим местным тарифам, причем независимо от вашего местонахождения.<br>',
																				{
																					elem : 'go',
																					content : [
																						{
																							tag: 'a',
																							attrs: { href: '#' },
																							content: [
																								'перейти к личному кабинету'
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
										},
										{
											block : 'home-elements-list-item',
											content : [
												{
													block: 'home-navigation',
													content: [
														{
															elem: 'list',
															tag : 'ul',
															content: [
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '0' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { 'href': '#' },
																			content: 'Калькулятор'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '1' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { 'href': '#' },
																			content: 'Пополнить баланс'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	mods: { 'active': true },
																	attrs: { 'data-slide': '2' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { 'href': '#' },
																			content: 'Особые мероприятия'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block: 'home-events',
													content: [
														{
															block : 'home-events-list',
															content : [
																{
																	date: '12.03.2015',
																	title: 'Минфин: МВФ признал долг Украины перед Россией на $3 миллиарда суверенным',
																	text: 'Суверенный долг не может рассматриваться наравне с коммерческим, пояснила помощник главы Минфина РФ Светлана Никитина. Ранее Россия предложила Украине реструктурировать долг на 3 миллиарда долларов.'
																},
																{
																	date: '12.03.2015',
																	img: 'img/home-events-list/1.jpg',
																	title: 'Минфин: МВФ признал долг Украины перед Россией на $3 миллиарда суверенным',
																	text: 'Суверенный долг не может рассматриваться наравне с коммерческим, пояснила помощник главы Минфина РФ Светлана Никитина. Ранее Россия предложила Украине реструктурировать долг на 3 миллиарда долларов.'
																},
																{
																	date: '12.03.2015',
																	title: 'Минфин: МВФ признал долг Украины перед Россией на $3 миллиарда суверенным',
																	text: 'Суверенный долг не может рассматриваться наравне с коммерческим, пояснила помощник главы Минфина РФ Светлана Никитина. Ранее Россия предложила Украине реструктурировать долг на 3 миллиарда долларов.'
																},
																{
																	date: '12.03.2015',
																	title: 'Минфин: МВФ признал долг Украины перед Россией на $3 миллиарда суверенным',
																	text: 'Суверенный долг не может рассматриваться наравне с коммерческим, пояснила помощник главы Минфина РФ Светлана Никитина. Ранее Россия предложила Украине реструктурировать долг на 3 миллиарда долларов.'
																}
															].map(function(item) {
																return {
																	block : 'home-events-list-item',
																	content : [
																		{
																			elem : 'date',
																			content : item.date
																		},
																		{
																			elem : 'info',
																			content : [
																				{
																					tag: item.img ? 'img' : undefined,
																					attrs: { 'src': item.img }
																				},
																				{
																					elem : 'title',
																					content : item.title
																				},
																				{
																					elem : 'text',
																					content : item.text
																				}
																			]
																		},
																		{
																			elem : 'more',
																			content : [
																				{
																					tag: 'a',
																					attrs: { 'href': '#' },
																					content: 'Подробнее'
																				}
																			]
																		}
																	]
																};
															})
														}
													]
												},
												{
													block : 'home-events-all',
													content : [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: 'Все мероприятия'
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