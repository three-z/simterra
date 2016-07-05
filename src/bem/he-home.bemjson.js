({
	block: 'template-page',
	homepage: true,
	rtl: true,
	lang: 'he',
	content: [
		{
			block: 'content',
			content: [
				{
					block: 'home-slider',
					content: [
						{
							block : 'home-slider-list',
							content : [
								{
									img: 'img/home-slider-list/slides/1.jpg'
								},
								{
									img: 'img/home-slider-list/slides/2.jpg'
								}
							].map(function(item) {
								return {
									block: 'home-slider-list-item',
									attrs: { 'style': 'background-image: url(' + item.img + ');' },
									content: ''
								};
							})
						},
						{
							block : 'home-slider-text',
							content : [
								{
									elem : 'title',
									content : 'כרטיס סים לחו"ל'
								},
								{
									elem : 'button',
									content : [
										{
											tag : 'a',
											attrs: { href: '#' },
											content : [
												{
													block : 'icon',
													tag: 'i',
													mods: { item: 'molecule' },
													content : ''
												},
												'להזמין עכשיו'
											]
										}
									]
								}
							]
						}
					]
				},
				{
					block : 'home-advantages',
					content : [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block : 'home-advantages-tabs',
									content : [
										{
											elem: 'list',
											tag: 'ul',
											content: [
												{
													title: 'מלא חופש מלאים',
													class: 'control'
												},
												{
													title: 'תעריפים מוזלים ללקוחות CAL',
													class: 'cal'
												},
												{
													title: 'המספרים המקומיים ב -60 מדינות',
													class: 'local'
												},
												{
													title: 'מוקד סיוע תקשורת עם CAL',
													class: 'hot'
												}
											].map(function(item) {
												return {
													elem: 'list-item',
													tag : 'li',
													mods : { item : item.class },
													content: [
														{
															tag: 'a',
															attrs: { 'href': '#home-advantages-' + item.class },
															content: item.title
														}
													]
												};
											})
										}
									]
								},
								{
									block : 'home-advantages-hide',
									content : [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: 'להסתיר'
										}
									]
								},
								{
									block : 'home-advantages-list',
									content : [
										{
											title: 'היכולת לטעון את האיזון בקלות בלי האינטרנט (דרך USSD בתפריט).',
											text: 'מבחינה הגיונית, זה צריך לפתוח משהו כמו "יותר", מבלי לעבור לדף אחר, כך שאתה יכול לראות / ללכת לעיירה סמוכה. לא הייתי רוצה לתת אותם לדף אחר. אבל כל עוד אני לא מבין איך לעשות את זה, בלי לשקול את הדף. או מספיק כפי שהוא? אנחנו צריכים לחשוב. <br> אין אפשרות אחרת, פשוט לכתוב את הטקסט להלן, אם אין זה רצוי להרפות לדף אחר. רק לכתוב אז להחליט איזו אפשרות',
											class: 'control'
										},
										{
											title: 'היכולת לטעון את האיזון בקלות בלי האינטרנט (דרך USSD בתפריט).',
											text: 'מבחינה הגיונית, זה צריך לפתוח משהו כמו "יותר", מבלי לעבור לדף אחר, כך שאתה יכול לראות / ללכת לעיירה סמוכה. לא הייתי רוצה לתת אותם לדף אחר. אבל כל עוד אני לא מבין איך לעשות את זה, בלי לשקול את הדף. או מספיק כפי שהוא? אנחנו צריכים לחשוב. <br> אין אפשרות אחרת, פשוט לכתוב את הטקסט להלן, אם אין זה רצוי להרפות לדף אחר. רק לכתוב אז להחליט איזו אפשרות',
											class: 'cal'
										},
										{
											title: 'היכולת לטעון את האיזון בקלות בלי האינטרנט (דרך USSD בתפריט).',
											text: 'מבחינה הגיונית, זה צריך לפתוח משהו כמו "יותר", מבלי לעבור לדף אחר, כך שאתה יכול לראות / ללכת לעיירה סמוכה. לא הייתי רוצה לתת אותם לדף אחר. אבל כל עוד אני לא מבין איך לעשות את זה, בלי לשקול את הדף. או מספיק כפי שהוא? אנחנו צריכים לחשוב. <br> אין אפשרות אחרת, פשוט לכתוב את הטקסט להלן, אם אין זה רצוי להרפות לדף אחר. רק לכתוב אז להחליט איזו אפשרות',
											class: 'local'
										},
										{
											title: 'היכולת לטעון את האיזון בקלות בלי האינטרנט (דרך USSD בתפריט).',
											text: 'מבחינה הגיונית, זה צריך לפתוח משהו כמו "יותר", מבלי לעבור לדף אחר, כך שאתה יכול לראות / ללכת לעיירה סמוכה. לא הייתי רוצה לתת אותם לדף אחר. אבל כל עוד אני לא מבין איך לעשות את זה, בלי לשקול את הדף. או מספיק כפי שהוא? אנחנו צריכים לחשוב. <br> אין אפשרות אחרת, פשוט לכתוב את הטקסט להלן, אם אין זה רצוי להרפות לדף אחר. רק לכתוב אז להחליט איזו אפשרות',
											class: 'hot'
										}
									].map(function(item) {
										return {
											block : 'home-advantages-list-item',
											attrs: { id: 'home-advantages-' + item.class },
											content : [
												{
													elem : 'title',
													tag : 'h3',
													content : item.title
												},
												{
													elem : 'text',
													content : item.text
												},
												{
													elem : 'more',
													content : [
														{
															tag: 'a',
															attrs: { 'href': '#' },
															content: 'ראה עוד'
														}
													]
												}
											]
										};
									})
								}
							]
						}
					]
				},
				{
					block : 'home-elements',
					content : [
						{
							elem: 'layout',
							mix: { block: 'container', mods: { 'no-padding': true } },
							content: [
								{
									block : 'home-elements-list',
									content : [
										{
											block : 'home-elements-list-item',
											content : [
												{
													block: 'home-navigation',
													content: [
														{
															elem: 'list',
															tag : 'ul',
															content: [
																{
																	elem: 'list-item',
																	tag : 'li',
																	mods: { 'active': true },
																	attrs: { 'data-slide': '0' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'מחשבון'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '1' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'טעינת כרטיס'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '2' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'אירועים מיוחדים'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block : 'home-calculator',
													content : [
														{
															elem: 'layout',
															content: [
																{
																	elem: 'layout-left',
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
																									content: 'טג\'יקיסטן'														},
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
																									content: 'הרפובליקה הדומיניקנית'
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
																					elem: 'switch',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: 'Поменять местами'
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
																			block: 'home-calculator-go',
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content: 'עבור אל מחשבון'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'layout-right',
																	content: [
																		{
																			block: 'home-calculator-list',
																			content: [
																				{
																					block: 'home-calculator-list-item',
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
																												'<strong>244</strong> עבור לקוחות ויזה כאל<br>',
																												'<small>0.2044 €/min</small><br>'
																											]
																										},
																										{
																											elem: 'list-item',
																											content: [
																												'<strong>195</strong> עבור לקוחות<br>',
																												'<small>0.2044 €/min</small><br>'
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					block: 'home-calculator-list-item',
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
																												'<strong>244</strong> עבור לקוחות ויזה כאל<br>',
																												'<small>0.2044 €/min</small><br>'
																											]
																										},
																										{
																											elem: 'list-item',
																											content: [
																												'<strong>195</strong> עבור לקוחות<br>',
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
											block : 'home-elements-list-item',
											content : [
												{
													block: 'home-navigation',
													content: [
														{
															elem: 'list',
															tag : 'ul',
															content: [
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '0' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'מחשבון'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	mods: { 'active': true },
																	attrs: { 'data-slide': '1' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'טעינת כרטיס'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '2' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'אירועים מיוחדים'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block : 'home-balance',
													content : [
														{
															elem: 'layout',
															content: [
																{
																	elem : 'layout-left',
																	content : [
																		{
																			block : 'sidebar',
																			content : [
																				{
																					block : 'sidebar-auth',
																					content : [
																						{
																							elem : 'description',
																							content : 'כדי לטעון עם האתר נא להתחבר <strong style="color: #dd004e;">*</strong>'
																						},
																						{
																							block : 'sidebar-auth-form',
																							content : [
																								{
																									elem : 'form',
																									tag : 'form',
																									content : [
																										{
																											elem : 'field',
																											content : [
																												{
																													elem : 'input',
																													tag: 'input',
																													mods : { 'login' : true },
																													attrs: { type: 'text', placeholder: 'הכנס את שם המשתמש שלך' }
																												}
																											]
																										},
																										{
																											elem : 'field',
																											content : [
																												{
																													elem : 'input',
																													tag: 'input',
																													mods : { 'password' : true },
																													attrs: { type: 'password', placeholder: 'הזן את הסיסמה שלך' }
																												},
																												{
																													elem : 'show-password',
																													tag: 'a',
																													attrs: { href: '#' },
																													content: [
																														'צג סיסמא'
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
																													content : 'התחבר'
																												}
																											]
																										}
																									]
																								}
																							]
																						},
																						{
																							elem : 'register',
																							content : '<strong style="color: #dd004e;">*</strong> אם אין לך שם משתמש וסיסמה, תוכל להירשם באתר'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem : 'layout-right',
																	content : [
																		{
																			block: 'home-balance-content',
																			content: [
																				{
																					tag : 'h3',
																					content : 'תעריף מיוחד'
																				},
																				'Simterra מספק את תעריפי נדידה הטובים ביותר עבור שיחות בינלאומיות, הודעות טקסט, לשלוח ולקבל נתונים, הפועלים 216 מדינות ברחבי העולם. <br>',
																				'זה עושה את זה לנסיעות אידיאליות הוא טיעון חזק כדי לקחת את זה בחו"ל. <br>',
																				'<br><br>',
																				{
																					tag : 'h3',
																					content : 'איך מפעילים את ה- SIM טרה?'
																				},
																				'Simterra מאוד קל לשימוש. אתה פשוט להחליף על זמן הנסיעה בכרטיסי SIM הרגיל שלך לכרטיס simterra. במקרה זה תוכל לקבל מתנה של שלושה חדרים: בארה"ב, אירופה וישראל. ? עכשיו החברים שלך בישראל, אמריקה ואירופה יוכלו לדבר איתך בשיעורים שלהם המקומיים, ללא קשר למיקום שלך. <br>',
																				{
																					elem : 'go',
																					content : [
																						{
																							tag: 'a',
																							attrs: { href: '#' },
																							content: [
																								'ללכת לחשבון האישי'
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
										},
										{
											block : 'home-elements-list-item',
											content : [
												{
													block: 'home-navigation',
													content: [
														{
															elem: 'list',
															tag : 'ul',
															content: [
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '0' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { 'href': '#' },
																			content: 'מחשבון'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	attrs: { 'data-slide': '1' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { 'href': '#' },
																			content: 'טעינת כרטיס'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag : 'li',
																	mods: { 'active': true },
																	attrs: { 'data-slide': '2' },
																	content: [
																		{
																			tag: 'a',
																			attrs: { 'href': '#' },
																			content: 'אירועים מיוחדים'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block: 'home-events',
													content: [
														{
															block : 'home-events-list',
															content : [
																{
																	date: '12.03.2015',
																	title: 'משרד האוצר: קרן המטבע הכירה החוב של אוקראינה לרוסיה ל -3 מיליארד ריבונית',
																	text: 'חוב ריבוני לא ניתן לטפל בשורה אחת עם מסחרי, הסביר ראש עוזרו של השר הרוסי אוצר סבטלנה Nikitina. מוקדם יותר, הציעה רוסיה אוקראינה לארגן מחדש את החוב על ידי 3 מיליארד $.'
																},
																{
																	date: '12.03.2015',
																	img: 'img/home-events-list/1.jpg',
																	title: 'משרד האוצר: קרן המטבע הכירה החוב של אוקראינה לרוסיה ל -3 מיליארד ריבונית',
																	text: 'חוב ריבוני לא ניתן לטפל בשורה אחת עם מסחרי, הסביר ראש עוזרו של השר הרוסי אוצר סבטלנה Nikitina. מוקדם יותר, הציעה רוסיה אוקראינה לארגן מחדש את החוב על ידי 3 מיליארד $.'
																},
																{
																	date: '12.03.2015',
																	title: 'משרד האוצר: קרן המטבע הכירה החוב של אוקראינה לרוסיה ל -3 מיליארד ריבונית',
																	text: 'חוב ריבוני לא ניתן לטפל בשורה אחת עם מסחרי, הסביר ראש עוזרו של השר הרוסי אוצר סבטלנה Nikitina. מוקדם יותר, הציעה רוסיה אוקראינה לארגן מחדש את החוב על ידי 3 מיליארד $.'
																},
																{
																	date: '12.03.2015',
																	title: 'משרד האוצר: קרן המטבע הכירה החוב של אוקראינה לרוסיה ל -3 מיליארד ריבונית',
																	text: 'חוב ריבוני לא ניתן לטפל בשורה אחת עם מסחרי, הסביר ראש עוזרו של השר הרוסי אוצר סבטלנה Nikitina. מוקדם יותר, הציעה רוסיה אוקראינה לארגן מחדש את החוב על ידי 3 מיליארד $.'
																}
															].map(function(item) {
																return {
																	block : 'home-events-list-item',
																	content : [
																		{
																			elem : 'date',
																			content : item.date
																		},
																		{
																			elem : 'info',
																			content : [
																				{
																					tag: item.img ? 'img' : undefined,
																					attrs: { 'src': item.img }
																				},
																				{
																					elem : 'title',
																					content : item.title
																				},
																				{
																					elem : 'text',
																					content : item.text
																				}
																			]
																		},
																		{
																			elem : 'more',
																			content : [
																				{
																					tag: 'a',
																					attrs: { 'href': '#' },
																					content: 'עוד'
																				}
																			]
																		}
																	]
																};
															})
														}
													]
												},
												{
													block : 'home-events-all',
													content : [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: 'כל האירועים'
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