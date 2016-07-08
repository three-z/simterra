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
													block: 'cabinet-history',
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
															block: 'cabinet-history-title',
															content: [
																{
																	tag: 'h3',
																	content: 'היסטוריית תשלומים'
																},
																{
																	block: 'cabinet-history-dates',
																	content: [
																		{
																			elem: 'from',
																			content: [
																				{
																					elem: 'label',
																					tag: 'label',
																					content: [
																						{
																							tag: 'input',
																							attrs: {'type': 'text', 'value': '', 'placeholder': '_ _ - _ _ - _ _ העיר'}
																						},
																						{
																							block : 'icon',
																							tag: 'i',
																							mods: { item: 'calendar' },
																							content : ''
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
																					content: [
																						{
																							tag: 'input',
																							attrs: {'type': 'text', 'value': '', 'placeholder': '_ _ - _ _ - _ _ העיר'}
																						},
																						{
																							block : 'icon',
																							tag: 'i',
																							mods: { item: 'calendar' },
																							content : ''
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
															block: 'cabinet-history-pay-table',
															content: [
																{
																	block: 'cabinet-history-pay-table-header',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					mods: {'type': 'numbers'},
																					tag: 'li',
																					content: 'השיטה של חידוש / ספרות אחרונה'
																				},
																				{
																					elem: 'list-item',
																					mods: {'type': 'date'},
																					tag: 'li',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: [
																								{
																									block : 'icon',
																									tag: 'i',
																									mods: { item: 'sort-down' },
																									content : ''
																								},
																								'תאריך'
																							]
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					mods: {'type': 'top'},
																					tag: 'li',
																					content: 'TOP UP'
																				}
																			]
																		}
																	]
																},
																{
																	block: 'cabinet-history-pay-table-body',
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
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					content: [
																						{
																							elem: 'list-cell',
																							mods: {'type': 'numbers'},
																							content: 'Visa cal  /  4589'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'date'},
																							content: '12.05.15'
																						},
																						{
																							elem: 'list-cell',
																							mods: {'type': 'top'},
																							content: '10 €'
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
															block: 'cabinet-history-controls',
															content: [
																{
																	elem: 'save',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: { item: 'save' },
																					content : ''
																				},
																				'לשמור על'
																			]
																		}
																	]
																},
																{
																	elem: 'send',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: { item: 'send' },
																					content : ''
																				},
																				'שלח מייל'
																			]
																		}
																	]
																},
																{
																	elem: 'print',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: { item: 'print' },
																					content : ''
																				},
																				'הדפס'
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