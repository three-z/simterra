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
															mods: {'active': true},
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
									block: 'content',
									elem: 'layout',
									content: [
										{
											elem: 'layout-left',
											content: [
												{
													block: 'sidebar',
													content: [
														{
															block: 'sidebar-navigation',
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
																					content: 'היסטוריה של שימוש'
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
																					content: 'היסטוריית תשלומים'
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
																					content: 'מלאו את האיזון'
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
																					content: 'מחשבון'
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
																					content: 'קנה'
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
											elem: 'layout-right',
											content: [
												{
													block: 'cabinet-did',
													content: [
														{
															block: 'cabinet-balance-info',
															content: [
																{
																	elem: 'text',
																	content: 'יתרה נוכחית: <strong>1003 €</strong>'
																},
																{
																	elem: 'refill',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: 'מלאו'
																		}
																	]
																}
															]
														},
														{
															tag: 'h3',
															content: 'קנה מספר חדש זמני'
														},
														{
															elem: 'layout',
															content: [
																{
																	elem: 'layout-left',
																	content: [
																		{
																			block: 'cabinet-did-select',
																			content: [
																				{
																					elem : 'form',
																					tag : 'form',
																					content : [
																						{
																							elem : 'field',
																							content : [
																								{
																									tag: 'select',
																									content: [
																										{
																											tag: 'option',
																											attrs: {'value': ''},
																											content: 'בחר מדינה'
																										},
																										{
																											tag: 'option',
																											attrs: {'value': '1'},
																											content: 'רוסיה'
																										}
																									]
																								}
																							]
																						},
																						{
																							elem : 'field',
																							content : [
																								{
																									tag: 'select',
																									content: [
																										{
																											tag: 'option',
																											attrs: {'value': ''},
																											content: 'בחר עיר'
																										},
																										{
																											tag: 'option',
																											attrs: {'value': '1'},
																											content: 'מוסקבה'
																										}
																									]
																								}
																							]
																						},
																						{
																							elem : 'field',
																							content : [
																								{
																									tag: 'select',
																									content: [
																										{
																											tag: 'option',
																											attrs: {'value': ''},
																											content: 'תוקף DID'
																										},
																										{
																											tag: 'option',
																											attrs: {'value': '1'},
																											content: '1 שנים'
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
																	elem: 'layout-right',
																	content: [
																		{
																			block: 'cabinet-did-info',
																			content: [
																				{
																					elem: 'list',
																					tag: 'ul',
																					content: [
																						{
																							elem: 'list-item',
																							tag: 'li',
																							content: 'דמים (לחודש): <strong>100.8306 €</strong>'
																						},
																						{
																							elem: 'list-item',
																							tag: 'li',
																							content: 'העלות לכל התקופה: <strong>100.8306 €</strong>'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'cabinet-did-buy',
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content: 'קנה'
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
		}
	]
});