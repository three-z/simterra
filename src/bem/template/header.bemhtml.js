block('template-header').replace()(function() {
	return [
		{
			block : 'header',
			content : [
				{
					block: 'header-top',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'layout-left',
									content: [
										{
											block: 'header-top-menu',
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
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'calculator' },
																			content : ''
																		},
																		'Калькулятор'
																	]
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
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'molecule' },
																			content : ''
																		},
																		'Заказать сим карту'
																	]
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
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'money' },
																			content : ''
																		},
																		'Пополнить баланс'
																	]
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
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: { item: 'user' },
																			content : ''
																		},
																		'Личный кабинет'
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
											block: 'header-lang',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															mods: { 'active': true },
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'RU'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'EN'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'HE'
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
					block: 'header-bottom',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem : 'layout-left',
									content : [
										{
											block: 'header-logo',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/header/logo.png' },
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
											block: 'header-navigation',
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
																	content: 'О нас'
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
																	content: 'Продукты'
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