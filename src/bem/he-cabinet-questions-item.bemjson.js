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
															mods: {'active': true},
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
									block: 'cabinet-questions',
									content: [
										{
											block: 'cabinet-questions-tabs',
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
																	attrs: {'href': '#'},
																	content: 'שאלה חדשה'
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
																	attrs: {'href': '#'},
																	content: 'כל הנושאים'
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'cabinet-questions-item',
											content: [
												{
													elem: 'layout',
													content: [
														{
															elem: 'layout-left',
															content: [
																{
																	block: 'cabinet-questions-item-form',
																	content: [
																		{
																			elem: 'form',
																			tag: 'form',
																			content: [
																				{
																					elem: 'text',
																					content: [
																						{
																							tag: 'label',
																							content: [
																								{
																									block : 'icon',
																									tag: 'i',
																									mods: { item: 'question' },
																									content : ''
																								},
																								'הודעתך'
																							]
																						},
																						{
																							tag: 'textarea',
																							content: []
																						}
																					]
																				},
																				{
																					elem: 'note',
																					content: '<strong style="color: #DE1616;">*</strong> כאן אתה יכול לשאול כל שאלה הקשורה לכרטיס Simterra. המומחים שלנו? יענו אותו בהקדם האפשרי.?'
																				},
																				{
																					elem : 'controls',
																					content : [
																						{
																							tag: 'button',
																							attrs: { type: 'submit' },
																							content : 'לשלוח'
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
																	block: 'cabinet-questions-item-links',
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
																							attrs: { href: '#' },
																							content: 'לכו לעזור'
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
																							content: 'פקודת USSD'
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
																							content: 'קשר'
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
																							content: 'המוצרים שלנו'
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