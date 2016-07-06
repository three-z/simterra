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
															mods: {'active': true},
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
									block: 'cabinet-params',
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
											content: 'בחדר עומד:'
										},
										{
											block: 'cabinet-params-table',
											content: [
												{
													block: 'cabinet-params-table-header',
													content: [
														{
															elem: 'list',
															tag: 'ul',
															content: [
																{
																	elem: 'list-item',
																	mods: {'type': 'icon'},
																	tag: 'li',
																	content: '&nbsp;'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'phone'},
																	tag: 'li',
																	content: 'מספר טלפון'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'country'},
																	tag: 'li',
																	content: 'בארץ'
																}
															]
														}
													]
												},
												{
													block: 'cabinet-params-table-body',
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
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag: 'li',
																	content: [
																		{
																			elem: 'list-cell',
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag: 'li',
																	content: [
																		{
																			elem: 'list-cell',
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
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
											tag: 'h3',
											content: 'דיור זמני:'
										},
										{
											block: 'cabinet-params-table',
											content: [
												{
													block: 'cabinet-params-table-header',
													content: [
														{
															elem: 'list',
															tag: 'ul',
															content: [
																{
																	elem: 'list-item',
																	mods: {'type': 'icon'},
																	tag: 'li',
																	content: '&nbsp;'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'phone'},
																	tag: 'li',
																	content: 'מספר טלפון'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'country'},
																	tag: 'li',
																	content: 'בארץ'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'date-start'},
																	tag: 'li',
																	content: 'תאריך הרכישה'
																},
																{
																	elem: 'list-item',
																	mods: {'type': 'date-end'},
																	tag: 'li',
																	content: 'תאריך סיום'
																}
															]
														}
													]
												},
												{
													block: 'cabinet-params-table-body',
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
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-start'},
																			content: '17/01/2016'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-end'},
																			content: '18/01/2016'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag: 'li',
																	content: [
																		{
																			elem: 'list-cell',
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-start'},
																			content: '17/01/2016'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-end'},
																			content: '18/01/2016'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag: 'li',
																	content: [
																		{
																			elem: 'list-cell',
																			mods: {'type': 'icon'},
																			content: [
																				{
																					block : 'icon',
																					tag: 'i',
																					mods: {item: 'phone'},
																					content : ''
																				}
																			]
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'phone'},
																			content: '+7 (812) 972- 54- 57'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'country'},
																			content: 'IL Israil'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-start'},
																			content: '17/01/2016'
																		},
																		{
																			elem: 'list-cell',
																			mods: {'type': 'date-end'},
																			content: '18/01/2016'
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