({
	block: 'template-page',
	title: 'קשר',
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
							block: 'contacts',
							content: [
								{
									elem: 'layout',
									content: [
										{
											elem: 'layout-left',
											content: [
												{
													block: 'contacts-note',
													content: 'הדרך הפשוטה והקלה ביותר לפנות אלינו על מנת להגיש בקשה באופן מקוון. <br> נא לשלוח אלינו את בקשתך ואנו ניצור עמכם קשר בהקדם'
												},
												{
													block: 'contacts-form',
													content: [
														{
															elem: 'form',
															tag: 'form',
															content: [
																{
																	elem : 'row',
																	content : [
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
																							content : [
																								{
																									block : 'icon',
																									tag: 'i',
																									mods: { item: 'name' },
																									content : ''
																								},
																								'שם המשפחה שם'
																							]
																						},
																						{
																							elem : 'input',
																							tag: 'input',
																							attrs: { 'type': 'text' }
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
																							content : [
																								{
																									block : 'icon',
																									tag: 'i',
																									mods: { item: 'email' },
																									content : ''
																								},
																								'כתובת דואר אלקטרוני'
																							]
																						},
																						{
																							elem : 'input',
																							tag: 'input',
																							attrs: { 'type': 'text' }
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
																							content : [
																								{
																									block : 'icon',
																									tag: 'i',
																									mods: { item: 'numbers' },
																									content : ''
																								},
																								'טלפון'
																							]
																						},
																						{
																							elem : 'input',
																							tag: 'input',
																							attrs: { 'type': 'text' }
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
																			mods : { 'columns' : '2', 'type' : 'textarea' },
																			content : [
																				{
																					elem : 'label',
																					tag : 'label',
																					content : [
																						{
																							elem : 'placeholder',
																							content : [
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
																							elem: 'textarea',
																							tag: 'textarea',
																							content: []
																						}
																					]
																				}
																			]
																		}
																	]
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
													block: 'contacts-phones',
													content: [
														'+7 (888) - 55- 70- 240',
														'<br>',
														'+7 (888) - 53- 74- 242'
													]
												},
												{
													block: 'contacts-self',
													content: [
														{
															elem: 'go',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content: 'נסו למצוא מידע'
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
					block: 'contacts-map',
					content: [
						{
							elem: 'button',
							content: [
								{
									tag: 'a',
									attrs: {'href': '#'},
									content: 'הצג מפה'
								}
							]
						},
						{
							elem: 'map',
							content: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.6363795188768!2d40.558843915929245!3d64.53220919049188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4418343024fd4fab%3A0xe95fe87aae8b8ebf!2z0YPQuy4g0KPRgNC40YbQutC-0LPQviwgMTcsINCQ0YDRhdCw0L3Qs9C10LvRjNGB0LosINCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQsNGPINC-0LHQuy4sIDE2MzAwMg!5e0!3m2!1sru!2sru!4v1469542892100" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>'
						},
						{
							elem: 'overflow',
							content: []
						}
					]
				}
			]
		}
	]
});