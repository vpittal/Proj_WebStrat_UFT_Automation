'**********************************************************************************************
'             WT_Login
'**********************************************************************************************

Function WT_Login()

SystemUtil.Run "iexplore.exe", "http://apset1004/HSS/WebStrat/login.aspx"

'SystemUtil.Run "iexplore.exe",setDataTable "WebStrat_url",dtLocalSheet 
'Dim dtLaunchUrl
'dtLaunchUrl = DataTable("WebStrat_Url",dtLocalSheet)

'SystemUtil.Run DataTable("WebStrat_Url",dtGlobalSheet)

Browser("name:=Web.Strat Login").Page("title:=Web.Strat Login").WebEdit("name:=TextBoxUserId","html tag:=INPUT","type:=text").Set "ERC_WSD"


Browser("name:=Web.Strat Login").Page("title:=Web.Strat Login").WebEdit("name:=TextBoxPassword","html tag:=INPUT","type:=password").Set "hss_PATDB"

Browser("name:=Web.Strat Login").Page("title:=Web.Strat Login").WebButton("name:=Login","html tag:=INPUT","type:=submit").Click

If Browser("name:=Web.Strat Login").Exist(12) Then
      Browser("name:=Web.Strat Login").Close
      Login = "Login Unsucceful -Failed"
      Call WT_Login()
		
	Else
	
	'SystemUtil.CloseDescendentProcesses
	
	'Login = "Login Unsucceful -Failed"
	'Browser("name:=Web.Strat Login").Close
	
	Login = "Login Successful - Passed"
	
End If
Msgbox Login

End Function
'**********************************************************************************************
'             WT_Searchclaim
'**********************************************************************************************
Function WT_Searchclaim()
	

Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").WbfTabStrip("html id:=TabStrip1").Select "Search"
Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").WbfTabStrip("html id:=TabStrip1").Click


Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch").WebList("name:=ddl_fld","htmltag:=SELECT").Select "Medical Record Number"


'InputVal = InputBox(" Enter the Medical Record Number/Account Number Value")

ExpInputVal = InputBox("Enter the Value")

Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WebEdit("name:=tb_medrecnum","htmltag:=INPUT","type:=text").Set ExpInputVal
Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WebButton("name:=Search","type:=submit","htmltag:=INPUT").Click

Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WbfGrid("logical name:=dg_search","htmltag:=TABLE").Highlight
'Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WbfGrid("logical name:=dg_search","htmltag:=TABLE").Object.Rows(i-1).Cells(7).FireEvent "ondblclick"
Rc = Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WbfGrid("logical name:=dg_search","htmltag:=TABLE").RowCount
	'MsgBox Rc
	For i = 2 to Rc
	valClaim  = Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WbfGrid("logical name:=dg_search","htmltag:=TABLE").GetCellData(i,7)
	'MsgBox valClaim
	If valClaim = ExpInputVal Then
	Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WbfGrid("logical name:=dg_search","htmltag:=TABLE").Object.Rows(i-1).Cells(7).FireEvent "ondblclick"
	'Msgbox Claim
	Exit For
	End If
	Next
	wait 10
	If Browser("name:=Web.Strat").WinObject("text:=Message from webpage").WinButton("text:=OK").exist then 

         Browser("name:=Web.Strat").WinObject("text:=Message from webpage").WinButton("text:=OK").Click 
         Claim = "Claim searched Unsucceful -Failed"
         
         Else
	
	     'SystemUtil.CloseDescendentProcesses

          Claim = "Claim Searched Successful - Passed"
	
End If
	Msgbox claim
	

'
'	If Browser("opentitle:=Web.Strat Login").Exist(12) Then
'      'Browser("name:=Web.Strat Login").Close
'      Claim = "Claim searched Unsucceful -Failed"
'
'		
'	Else
'	
'	SystemUtil.CloseDescendentProcesses
'	
'	'Login = "Login Unsucceful -Failed"
'	'Browser("name:=Web.Strat Login").Close
'	
'	Claim = "Claim Searched Successful - Passed"
'	
'End If
'Msgbox Claim	
	
End Function

'**********************************************************************************************
'             WT_Save
'**********************************************************************************************
Function WT_Saveclaim()
	'Save claim 

Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Sync


'Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom","htmltag:=IFRAME").WbfGrid("htmlid:=Hcpcs","htmltag:=TABLE").WebEdit("name:=total0","html tag:=INPUT","type:=text").Getcelldata



Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("text:=File","html tag:=A").Click


Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("text:=Save \(Ctrl\+S\)").Click

wait 10


If Browser("name:=Web.Strat").WinObject("text:=Message from webpage").WinButton("text:=OK").exist then 

         Browser("name:=Web.Strat").WinObject("text:=Message from webpage").WinButton("text:=OK").Click 
         webpage = "Webstrat claim saved Unsucceful -Failed"
         
         Else
	
	    ' SystemUtil.CloseDescendentProcesses

         webpage = "Webstrat claim saved Successful - Passed"
         
         End if

MsgBox webpage
	
End Function

'**********************************************************************************************
'             WT_Delete
'**********************************************************************************************



'**********************************************************************************************
'             WT_Logout
'**********************************************************************************************
Function WT_Logout()
	'Logout the application

Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Sync

wait 10

Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").WebButton("name:=Logout","htmlid:=ButtonLogout").Click
	
	'Close the browser
   'Browser("Web.Strat Login").Page("Web.Strat Login").Sync
   
   Browser("opentitle:=Web.Strat Login").Close()
   
If Browser("name:=Web.Strat").WinObject("text:=Message from webpage").WinButton("text:=OK").exist then 

         Browser("name:=Web.Strat").WinObject("text:=Message from webpage").WinButton("text:=OK").Click 
         webpage = "WebStrat logout Unsucceful -Failed"
         
         Else
	
	     SystemUtil.CloseDescendentProcesses

         webpage = "WebStrat logout Successful - Passed"
	
End If
  Msgbox webpage
	
		
End Function
'**************************************************************************************************
