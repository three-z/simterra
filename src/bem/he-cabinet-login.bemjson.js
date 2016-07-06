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
									block: 'cabinet-login',
									content: [
										'<h3>תעריף מיוחד</h3>',
										'Simterra מספק את תעריפי נדידה הטובים ביותר עבור שיחות בינלאומיות, הודעות טקסט, לשלוח ולקבל נתונים, הפועלים 216 מדינות ברחבי העולם.' + '<br>',
										'זה עושה את זה לנסיעות אידיאליות הוא טיעון חזק כדי לקחת את זה בחו"ל.' + '<br>',
										'<br><br>',
										'<h3>איך מפעילים את ה- SIM טרה?</h3>',
										'Simterra מאוד קל לשימוש. אתה פשוט להחליף על זמן הנסיעה בכרטיסי SIM הרגיל שלך לכרטיס simterra. במקרה זה תוכל לקבל מתנה של שלושה חדרים: בארה"ב, אירופה וישראל. <br> עכשיו החברים שלך בישראל, אמריקה ואירופה יוכלו לדבר איתך בשיעורים המקומיים שלהם, ללא קשר למיקום שלך.'
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