({
	block: 'template-page',
	title: 'Личный кабинет',
	content: [
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mix: {block: 'container'},
					content: [
						{
							block: 'cabinet',
							content: [
								{
									block: 'cabinet-top',
									content: [
										{
											block: 'cabinet-imsi',
											content: [
												{
													tag: 'strong',
													content: 'IMSI:'
												},
												'7819 4516 1213 7890'
											]
										},
										{
											block: 'cabinet-navigation',
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
																	attrs: {href: '#'},
																	content: 'Персональные данные'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {href: '#'},
																	content: 'Текущие параметры'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {href: '#'},
																	content: 'Операции'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {href: '#'},
																	content: 'Задать вопрос'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {href: '#'},
																	content: [
																		{
																			block : 'icon',
																			tag: 'i',
																			mods: {item: 'exit'},
																			content : ''
																		},
																		'Выход'
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
									block: 'cabinet-info',
									content: [
										{
											block: 'cabinet-info-user',
											content: [
												{
													tag: 'h3',
													content: 'Александр Олегович Марков'
												},
												{
													block: 'cabinet-info',
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'strong',
																	content: 'E-mail:'
																},
																'mark@test.com'
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'strong',
																	content: 'Mobile:'
																},
																'+7 (812) 555-55-55'
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'strong',
																	content: 'Статус:'
																},
																'Клиент VISA CAL'
															]
														}
													]
												}
											]
										},
										{
											block: 'cabinet-info-imsi',
											content: [
												{
													tag: 'h3',
													content: [
														'Уникальный идентификатор карточки (IMSI)',
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: [
																{
																	block : 'icon',
																	tag: 'i',
																	mods: {item: 'help'},
																	content : ''
																}
															]
														}
													]
												},
												{
													block: 'cabinet-info',
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'strong',
																	content: 'IMSI:'
																},
																'7819 4516 1213 7890'
															]
														}
													]
												}
											]
										},
										{
											block: 'cabinet-info-phones',
											content: [
												{
													tag: 'h3',
													content: 'Мои постоянные номера:'
												},
												{
													block: 'cabinet-info',
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'strong',
																	content: 'Ваш номер:'
																},
																'+7 (812) 456- 89- 45'
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'strong',
																	content: 'Страна:'
																},
																'FR Франция'
															]
														}
													]
												},
												{
													block: 'cabinet-info',
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'strong',
																	content: 'Ваш номер:'
																},
																'+7 (812) 456- 77- 35'
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'strong',
																	content: 'Страна:'
																},
																'IL Израиль'
															]
														}
													]
												},
												{
													block: 'cabinet-info',
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'strong',
																	content: 'Ваш номер:'
																},
																'+7 (812) 456- 77- 35'
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'strong',
																	content: 'Страна:'
																},
																'US США'
															]
														}
													]
												}
											]
										},
										{
											block: 'cabinet-info-cards',
											content: [
												{
													tag: 'h3',
													content: 'Мои карты:'
												},
												{
													block: 'cabinet-info-cards-table',
													content: [
														{
															block: 'cabinet-info-cards-table-header',
															content: [
																{
																	elem: 'list',
																	tag: 'ul',
																	content: [
																		{
																			elem: 'list-item',
																			mods: {'type': 'name'},
																			tag: 'li',
																			content: 'тип карты'
																		},
																		{
																			elem: 'list-item',
																			mods: {'type': 'numbers'},
																			tag: 'li',
																			content: 'последние 4 цифры'
																		},
																		{
																			elem: 'list-item',
																			mods: {'type': 'switch'},
																			tag: 'li',
																			content: 'выбрана как основная'
																		},
																		{
																			elem: 'list-item',
																			mods: {'type': 'delete'},
																			tag: 'li',
																			content: 'действие'
																		}
																	]
																}
															]
														},
														{
															block: 'cabinet-info-cards-table-body',
															content: [
																{
																	elem: 'list',
																	tag: 'ul',
																	content: [
																		{
																			elem: 'list-item',
																			tag: 'li',
																			content: [
																				{
																					elem: 'list-cell',
																					mods: {'type': 'name'},
																					content: 'VISA CAL'
																				},
																				{
																					elem: 'list-cell',
																					mods: {'type': 'numbers'},
																					content: '5326'
																				},
																				{
																					elem: 'list-cell',
																					mods: {'type': 'switch'},
																					content: [
																						{
																							elem: 'switch',
																							mods: {'active': true},
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: 'Выбрать'
																						}
																					]
																				},
																				{
																					elem: 'list-cell',
																					mods: {'type': 'delete'},
																					content: [
																						{
																							elem: 'delete',
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: 'Удалить'
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'list-item',
																			tag: 'li',
																			content: [
																				{
																					elem: 'list-cell',
																					mods: {'type': 'name'},
																					content: 'VISA CAL'
																				},
																				{
																					elem: 'list-cell',
																					mods: {'type': 'numbers'},
																					content: '5326'
																				},
																				{
																					elem: 'list-cell',
																					mods: {'type': 'switch'},
																					content: [
																						{
																							elem: 'switch',
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: 'Выбрать'
																						}
																					]
																				},
																				{
																					elem: 'list-cell',
																					mods: {'type': 'delete'},
																					content: [
																						{
																							elem: 'delete',
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: 'Удалить'
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
													block: 'cabinet-info-cards-add',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: 'Добавить еще карту'
														}
													]
												}
											]
										},
										{
											block: 'cabinet-info-security',
											content: [
												{
													tag: 'h3',
													content: 'Смена пароля и параметры безопасности:'
												},
												{
													elem: 'text',
													content: 'Изменение пароля, адреса электронной почты для восстановления пароля, управление другими параметрами безопасности своей учетной записи'
												},
												{
													elem: 'edit',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: 'Изменить'
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