({
	block: 'template-page',
	title: 'כרטיס SIM להזמין',
	rtl: true,
	lang: 'he',
	content: [
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'order',
							content: [
								{
									block : 'order-steps',
									content : [
										{
											elem : 'list',
											content : [
												{
													elem : 'list-item',
													content : 'בחר מוצר'
												},
												{
													elem : 'list-item',
													mods : { 'active' : true },
													content : 'לקופה'
												},
												{
													elem : 'list-item',
													content : 'כדי להשלים'
												}
											]
										}
									]
								},
								{
									block : 'order-info',
									content : [
										{
											tag : 'h3',
											content : 'ההזמנה שלך'
										},
										{
											block : 'order-info-list',
											content : [
												{
													block : 'order-info-list-item',
													content : [
														{
															elem : 'image',
															content : [
																{
																	tag: 'img',
																	attrs: { 'src': 'img/order-info-list/items/1.png' }
																}
															]
														},
														{
															elem : 'price',
															content : 'SIM - 20 €; על היתרה - 10 €'
														},
														{
															elem : 'delete',
															content : [
																{
																	tag : 'a',
																	attrs : { 'href' : '#' },
																	content : 'מחק'
																}
															]
														}
													]
												}
											]
										},
										{
											tag : 'h4',
											content : [
												{
													tag : 'span',
													content : '1'
												}
											]
										},
										{
											tag : 'h3',
											content : 'הנתונים האישיים שלך'
										},
										{
											block : 'order-info-form',
											content : [
												{
													elem : 'confidentiality',
													content : '* אזהרה! אנחנו עולים בקנה אחד עם מדיניות הפרטיות ולא נשתף את המידע שלך עם צדדי שלישיים'
												},
												{
													elem : 'form',
													tag : 'form',
													content : [
														{
															elem : 'row',
															content : [
																{
																	elem : 'field',
																	content : [
																		{
																			elem : 'label',
																			tag : 'label',
																			content : [
																				{
																					elem : 'placeholder',
																					content : 'שם מלא.:'
																				},
																				{
																					elem : 'input',
																					tag: 'input',
																					attrs: { type: 'text' }
																				}
																			]
																		}
																	]
																},
																{
																	elem : 'field',
																	content : [
																		{
																			elem : 'label',
																			tag : 'label',
																			content : [
																				{
																					elem : 'placeholder',
																					content : 'טלפון נייד:'
																				},
																				{
																					elem : 'input',
																					tag: 'input',
																					attrs: { type: 'text' }
																				}
																			]
																		}
																	]
																},
																{
																	elem : 'field',
																	content : [
																		{
																			elem : 'label',
																			tag : 'label',
																			content : [
																				{
																					elem : 'placeholder',
																					content : 'דואר אלקטרוני:'
																				},
																				{
																					elem : 'input',
																					tag: 'input',
																					attrs: { type: 'text' }
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															elem : 'row',
															content : [
																{
																	elem : 'field',
																	content : [
																		{
																			elem : 'label',
																			tag : 'label',
																			content : [
																				{
																					elem : 'placeholder',
																					content : 'מספר תעודת זהות:'
																				},
																				{
																					elem : 'input',
																					tag: 'input',
																					attrs: { type: 'text' }
																				}
																			]
																		}
																	]
																},
																{
																	elem : 'field',
																	mods : { 'columns' : '2' },
																	content : [
																		{
																			elem : 'label',
																			tag : 'label',
																			content : [
																				{
																					elem : 'placeholder',
																					content : 'כתובת קבועה:'
																				},
																				{
																					elem : 'input',
																					tag: 'input',
																					attrs: { 'type': 'text', 'placeholder': '(индекс, страна, область, город, район, улица, дом, квартира)' }
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															elem : 'row',
															content : [
																{
																	elem : 'field',
																	content : [
																		{
																			elem : 'label',
																			tag : 'label',
																			content : [
																				{
																					elem : 'placeholder',
																					content : 'תאריך יציאה:'
																				},
																				{
																					elem : 'input',
																					tag: 'input',
																					attrs: { 'type': 'text', 'placeholder': '__.__.____' }
																				}
																			]
																		}
																	]
																},
																{
																	elem : 'field',
																	content : [
																		{
																			elem : 'label',
																			tag : 'label',
																			content : [
																				{
																					elem : 'placeholder',
																					content : 'חזור:'
																				},
																				{
																					elem : 'input',
																					tag: 'input',
																					attrs: { 'type': 'text', 'placeholder': '__.__.____' }
																				}
																			]
																		}
																	]
																},
																{
																	elem : 'field',
																	content : [
																		{
																			elem : 'note',
																			content : '<span style="color: #f80000;">*</span> אם אתה לא יודע את התאריכים המדויקים, ניתן לציין את לכאורה'
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
											tag : 'h4',
											content : [
												{
													tag : 'span',
													content : '2'
												}
											]
										},
										{
											tag : 'h3',
											content : 'בחר באפשרות משלוח'
										},
										{
											block : 'order-info-delivery',
											content : [
												{
													elem : 'form',
													tag : 'form',
													content : [
														{
															elem : 'switch',
															content : [
																{
																	elem : 'label',
																	tag : 'label',
																	content : [
																		{
																			elem : 'radio',
																			tag: 'input',
																			attrs: { 'type': 'radio', 'name': 'delivery', 'checked': 'checked' }
																		},
																		'שליחת דואר לכתובת שצוינה'
																	]
																},
																{
																	elem : 'label',
																	tag : 'label',
																	content : [
																		{
																			elem : 'radio',
																			tag: 'input',
																			attrs: { 'type': 'radio', 'name': 'delivery' }
																		},
																		'מִשׁלוֹחַ מָהִיר'
																	]
																},
																{
																	elem : 'label',
																	tag : 'label',
																	content : [
																		{
																			elem : 'radio',
																			tag: 'input',
																			attrs: { 'type': 'radio', 'name': 'delivery' }
																		},
																		'להגיע לשדה התעופה בנקודת ההנפקה'
																	]
																}
															]
														},
														{
															elem : 'address',
															content : [
																{
																	elem : 'field',
																	tag: 'label',
																	content : [
																		{
																			elem : 'placeholder',
																			content : 'כתובת משלוח:'
																		},
																		{
																			elem : 'input',
																			tag: 'input',
																			attrs: { 'type': 'text', 'placeholder': '(קוד, ארץ, אזור, עיר, מחוז, רחוב, בית, דירה)' }
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem : 'price',
													content : 'עלות משלוח: <strong>10 €</strong>'
												}
											]
										},
										{
											tag : 'h4',
											content : [
												{
													tag : 'span',
													content : '3'
												}
											]
										},
										{
											block : 'order-info-total',
											content : 'סכום: <strong>10 €</strong>'
										},
										{
											block : 'order-info-pay',
											content : [
												{
													tag : 'a',
													attrs : { 'href' : '#' },
													content : 'לשלם'
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