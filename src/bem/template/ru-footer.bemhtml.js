block('template-footer-ru').replace()(function() {
	return [
		{
			block : 'bottom',
			content : [
				{
					elem: 'layout',
					mix: { block: 'container', mods: { 'no-padding': true } },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block : 'bottom-time',
									content : [
										{
											elem : 'days',
											content : [
												{
													tag : 'ul',
													content: [
														{
															tag : 'li',
															content: 'Пн.'
														},
														{
															tag : 'li',
															content: 'Вт.'
														},
														{
															tag : 'li',
															content: 'Ср.'
														},
														{
															tag : 'li',
															content: 'Чт.'
														},
														{
															tag : 'li',
															content: 'Пт.'
														},
														{
															tag : 'li',
															content: 'Сб.'
														},
														{
															tag : 'li',
															content: 'Вс.'
														}
													]
												}
											]
										},
										{
											elem : 'time',
											content : 'Круглосуточно'
										}
									]
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block : 'bottom-phones',
									content : [
										{
											tag : 'ul',
											content: [
												{
													tag : 'li',
													content: '+7 (888) - 55-70-240'
												},
												{
													tag : 'li',
													content: '+7 (888) - 53-74-242'
												}
											]
										}
									]
								},
								{
									block : 'bottom-contacts',
									content : [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: 'Контакты'
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
			block: 'footer',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'footer-logo',
							content: [
								{
									tag: 'a',
									attrs: { href: '#' },
									content: [
										{
											tag: 'img',
											attrs: { src: 'img/footer/logo.png' },
										}
									]
								}
							]
						},
						{
							block: 'footer-navigation',
							content: [
								{
									elem: 'list',
									tag : 'ul',
									content: [
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Главная'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Мероприятия'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Помощь'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Контакты'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Личный кабинет'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
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
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Заказать сим карту'
												}
											]
										},
										{
											elem: 'list-item',
											tag : 'li',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'Калькулятор'
												}
											]
										}
									]
								}
							]
						},
						{
							block: 'footer-copyright',
							content: '2015- 2016 гг. All rights SimTerra reserved (c) - Разработка компании - <a href="#">Leeft</a>'
						}
					]
				}
			]
		}
	];
});