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
													block: 'cabinet-calculator',
													content: [
														{
															block: 'calculator-tabs',
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
																					attrs: {'href': '#calculator-content-1'},
																					content: 'שיחה'
																				}
																			]
																		},
																		{
																			elem: 'list-item',
																			tag: 'li',
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#calculator-content-2'},
																					content: 'אינטרנט'
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															block: 'calculator-content',
															content: [
																{
																	elem: 'list',
																	content: [
																		{
																			elem: 'list-item',
																			mods: {'active': true},
																			attrs: {'id': 'calculator-content-1'},
																			content: [
																				{
																					block: 'calculator-calls',
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
																											content: 'מהיכן'
																										},
																										{
																											elem: 'select',
																											tag: 'select',
																											mods: {'location': true},
																											content: [
																												{
																													tag: 'option',
																													attrs: {'value': '0'},
																													content: 'רוסיה'
																												},
																												{
																													tag: 'option',
																													attrs: {'value': '1'},
																													content: 'טג\'יקיסטן'
																												},
																												{
																													tag: 'option',
																													attrs: {'value': '2'},
																													content: 'הרפובליקה הדומיניקנית'
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
																											content: 'שם'
																										},
																										{
																											elem: 'select',
																											tag: 'select',
																											mods: {'location': true},
																											content: [
																												{
																													tag: 'option',
																													attrs: {'value': '0'},
																													content: 'רוסיה'
																												},
																												{
																													tag: 'option',
																													attrs: {'value': '1'},
																													content: 'טג\'יקיסטן'
																												},
																												{
																													tag: 'option',
																													attrs: {'value': '2'},
																													content: 'הרפובליקה הדומיניקנית'
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
																											content: 'החלפה'
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
																									content: 'אני אשלם'
																								}
																							]
																						},
																						{
																							block: 'calculator-calls-list',
																							content: [
																								{
																									block: 'calculator-calls-list-item',
																									content: [
																										{
																											elem: 'type',
																											content: [
																												{
																													tag: 'img',
																													attrs: {'src': 'img/calculator-calls-list/icons/minutes.png'}
																												},
																												'דקות'
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
																																'עבור לקוחות ויזה כאל <strong>244</strong><br>',
																																'<small>0.2044 €/min</small><br>'
																															]
																														},
																														{
																															elem: 'list-item',
																															content: [
																																'עבור לקוחות <strong>195</strong><br>',
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
																						},
																						{
																							block: 'calculator-buy',
																							content: [
																								{
																									tag: 'a',
																									attrs: {'href': '#'},
																									content: 'לרכוש'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'list-item',
																			attrs: {'id': 'calculator-content-2'},
																			content: [
																				{
																					block: 'calculator-internet',
																					content: [
																						{
																							block: 'calculator-internet-select',
																							content: [
																								{
																									elem: 'label',
																									tag: 'label',
																									content: 'בחר מדינה'
																								},
																								{
																									elem: 'select',
																									tag: 'select',
																									mods: {'location': true},
																									content: [
																										{
																											tag: 'option',
																											attrs: {'value': '0'},
																											content: 'רוסיה'
																										},
																										{
																											tag: 'option',
																											attrs: {'value': '1'},
																											content: 'טג\'יקיסטן'
																										},
																										{
																											tag: 'option',
																											attrs: {'value': '2'},
																											content: 'הרפובליקה הדומיניקנית'
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
																									content: 'אני אשלם'
																								}
																							]
																						},
																						{
																							block: 'calculator-internet-list',
																							content: [
																								{
																									block: 'calculator-internet-list-item',
																									content: [
																										{
																											elem: 'type',
																											content: [
																												{
																													tag: 'img',
																													attrs: {'src': 'img/calculator-internet-list/icons/traffic.png'}
																												},
																												'תנועה'
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
																																'עבור לקוחות ויזה כאל <strong>244</strong><br>',
																																'<small>0.2044 €/min</small><br>'
																															]
																														},
																														{
																															elem: 'list-item',
																															content: [
																																'עבור לקוחות <strong>195</strong><br>',
																																'<small>0.2044 €/min</small><br>'
																															]
																														}
																													]
																												}
																											]
																										},
																										{
																											elem: 'operator',
																											content: 'מפעיל:  Grand BUSINESS'
																										}
																									]
																								},
																								{
																									block: 'calculator-internet-list-item',
																									content: [
																										{
																											elem: 'type',
																											content: [
																												{
																													tag: 'img',
																													attrs: {'src': 'img/calculator-internet-list/icons/traffic.png'}
																												},
																												'תנועה'
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
																																'עבור לקוחות ויזה כאל <strong>244</strong><br>',
																																'<small>0.2044 €/min</small><br>'
																															]
																														},
																														{
																															elem: 'list-item',
																															content: [
																																'עבור לקוחות <strong>195</strong><br>',
																																'<small>0.2044 €/min</small><br>'
																															]
																														}
																													]
																												}
																											]
																										},
																										{
																											elem: 'operator',
																											content: 'מפעיל:  Grand BUSINESS'
																										}
																									]
																								}
																							]
																						},
																						{
																							block: 'calculator-buy',
																							content: [
																								{
																									tag: 'a',
																									attrs: {'href': '#'},
																									content: 'לרכוש'
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
				}
			]
		}
	]
});