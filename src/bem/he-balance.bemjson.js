({
	block: 'template-page',
	title: 'מלאו את האיזון',
	rtl: true,
	lang: 'he',
	content: [
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mods : { 'big-sidebar' : true },
					mix: { block: 'container' },
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
																			content : 'התחבר לחשבון שלך'
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
									block: 'balance',
									content: [
										{
											tag : 'h3',
											content : [
												{
													block : 'icon',
													tag: 'i',
													mods: { item: 'balance' },
													content : ''
												},
												' סך כל המאזן'
											]
										},
										'- יתרתך בחשבון שלך חלה על כל המספרים שרכשת.<br>',
										'- אתה לא צריך לדאוג שמה בחדר פתאום נגמר הכסף.<br>',
										'<br><br>',
										{
											tag : 'h3',
											content : [
												{
													block : 'icon',
													tag: 'i',
													mods: { item: 'ussd' },
													content : ''
												},
												' תפריט USSD '
											]
										},
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'star' },
											content : ''
										},
										' <strong>111</strong> ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'grid' },
											content : ''
										},
										' ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'call' },
											content : ''
										},
										' - הפעלה מסכום ההתחלה.<br>',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'star' },
											content : ''
										},
										' <strong>110</strong> ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'grid' },
											content : ''
										},
										' ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'call' },
											content : ''
										},
										' - למידע נוסף על התעריף שלך<br>',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'star' },
											content : ''
										},
										' <strong>102</strong> ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'grid' },
											content : ''
										},
										' ',
										{
											block : 'icon',
											tag: 'i',
											mods: { item: 'call' },
											content : ''
										},
										' - הפעלה של הסכום ההתחלתי<br>',
										{
											elem : 'go',
											content : [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'עבור לסעיף העזרה וללמוד את כל הפקודות בתפריט USSD'
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