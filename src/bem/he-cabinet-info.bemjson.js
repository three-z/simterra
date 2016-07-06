({
	block: 'template-page',
	title: 'משרדים',
	rtl: true,
	lang: 'he',
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
																	content: 'נתונים אישיים'
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
																	content: 'הגדרות נוכחיות'
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
																	content: 'פעולות'
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
																	content: 'שאל שאלה'
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
																		'יציאה'
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
																	content: 'מצב:'
																},
																'לקוח ויזה כאל'
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
														'מזהה כרטיס ייחודי (IMSI)',
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
													content: 'מספרים הקבועים שלי:'
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
																	content: 'המספר שלך:'
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
																	content: 'מדינה:'
																},
																'FR צרפת'
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
																	content: 'המספר שלך:'
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
																	content: 'מדינה:'
																},
																'IL ישראל'
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
																	content: 'המספר שלך:'
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
																	content: 'מדינה:'
																},
																'US ארצות הברית'
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
													content: 'המפות שלי:'
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
																			content: 'סוג כרטיס'
																		},
																		{
																			elem: 'list-item',
																			mods: {'type': 'numbers'},
																			tag: 'li',
																			content: '4 הספרות האחרונות'
																		},
																		{
																			elem: 'list-item',
																			mods: {'type': 'switch'},
																			tag: 'li',
																			content: 'נבחר הראשי'
																		},
																		{
																			elem: 'list-item',
																			mods: {'type': 'delete'},
																			tag: 'li',
																			content: 'אפקט'
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
																							content: 'לבחור'
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
																							content: 'מחק'
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
																							content: 'לבחור'
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
																							content: 'מחק'
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
															content: 'הוספת כרטיס נוסף'
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
													content: 'שינוי הסיסמה והגדרות האבטחה שלך:'
												},
												{
													elem: 'text',
													content: 'שינוי כתובות דואר אלקטרוני סיסמה, שחזור סיסמה, ולנהל הגדרות אבטחה נוספות עבור חשבונך'
												},
												{
													elem: 'edit',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: 'לתקן'
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