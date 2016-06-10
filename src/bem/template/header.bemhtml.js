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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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
															elem: 'item',
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