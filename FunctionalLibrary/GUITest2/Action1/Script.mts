'Create New Sheets in Run - time Data Table to import Organizer instructions

DataTable.AddSheet "TestCase"

'Import data from an External file
dataTable.importsheet "C:\Proj_WebStrat_UFT_Automation\FunctionalLibrary\WebStratSearchData.xlsx",2,3

MRowCount = DataTable.GetSheet("TestCase").GetRowCount
 

For i = 1 To MRowCount
	
	DataTable.SetCurrentRow(i) 
	
	'Msgbox MRowCount
	  'first 2 is column Id ,next 2 is Sheet id
	UrlExecution = DataTable(3, 3)
	
	If UCase(UrlExecution)= "Y" Then
	
	Webstrat_Urls = DataTable(2,"TestCase") 
	
		Msgbox Webstrat_Urls
		
		
		
	End If
	'SystemUtil.Run "iexplore.exe", "Webstrat_Urls"
	'Exit For
Next

SystemUtil.Run "iexplore.exe", Webstrat_Urls




'SystemUtil.Run "iexplore.exe", "http://apset1004/HSS/WebStrat/login.aspx" 

'"http://webstratstg/HSS/WebStrat/login.aspx"

'http://apset1004/HSS/WebStrat/login.aspx"

'http://webstratstg/HSS/WebStrat/login.aspx

'SystemUtil.Run "iexplore.exe",setDataTable "WebStrat_url",dtLocalSheet 
'Dim dtLaunchUrl
'dtLaunchUrl = DataTable("WebStrat_Url",dtLocalSheet)

'SystemUtil.Run DataTable("WebStrat_Url",dtGlobalSheet)

Browser("name:=Web.Strat Login").Page("title:=Web.Strat Login").WebEdit("name:=TextBoxUserId","html tag:=INPUT","type:=text").Set "ERC_WSD" @@ hightlight id_;_HIGHLIGHT PARAMS_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("name:=Web.Strat Login").Page("title:=Web.Strat Login").WebEdit("name:=TextBoxPassword","html tag:=INPUT","type:=password").Set "hss_PATDB" @@ hightlight id_;_HIGHLIGHT PARAMS_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("name:=Web.Strat Login").Page("title:=Web.Strat Login").WebButton("name:=Login","html tag:=INPUT","type:=submit").Click @@ hightlight id_;_HIGHLIGHT PARAMS_;_script infofile_;_ZIP::ssf3.xml_;_

Wait 10 
'----------------------------------------------------------------------------

Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").WbfTabStrip("html id:=TabStrip1").Select "Search" @@ hightlight id_;_HIGHLIGHT PARAMS_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").WbfTabStrip("html id:=TabStrip1").Click @@ hightlight id_;_HIGHLIGHT PARAMS_;_script infofile_;_ZIP::ssf5.xml_;_


Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch").WebList("name:=ddl_fld","htmltag:=SELECT").Select "Medical Record Number" @@ hightlight id_;_HIGHLIGHT PARAMS_;_script infofile_;_ZIP::ssf6.xml_;_


'InputVal = InputBox(" Enter the Medical Record Number/Account Number Value")

'ExpInputVal = InputBox("Enter the Medical Record Number/Account Number Value")

Dim RowCnt,MedRecordNumber

'Set ExpInputVal1

dataTable.importsheet "C:\Proj_WebStrat_UFT_Automation\FunctionalLibrary\WebStratSearchData.xlsx",1,"Global"

RowCnt = datatable.GetSheet("Global").GetRowCount
MsgBox RowCnt

For j = 2 To RowCnt


 Datatable.SetCurrentRow(j)
 
	If UCase(Status = DataTable("Execution",Global)) = "Y" Then
		MedicalRecordNumber = Datatable("MedicalRecordNumber","Global")
		Msgbox MedicalRecordNumber	
			Datatable.SetCurrentRow(j)
	
	'MedRecordNumber = Datatable("MedicalRecordNumber","Global")
	End If
	'MedRecordNumber = Datatable("MedicalRecordNumber","Global")
	
	Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WebEdit("name:=tb_medrecnum","htmltag:=INPUT","type:=text").Set MedRecordNumber
	Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WebButton("name:=Search","type:=submit","htmltag:=INPUT").Click
	Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WbfGrid("logical name:=dg_search","htmltag:=TABLE").Highlight
		
    Rc = Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WbfGrid("logical name:=dg_search","htmltag:=TABLE").RowCount
	'MsgBox Rc
	For i = 2 to Rc
	valClaim  = Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WbfGrid("logical name:=dg_search","htmltag:=TABLE").GetCellData(i,7)
	'MsgBox valClaim
	If valClaim = MedRecordNumber Then
	Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch","htmltag:=IFRAME").WbfGrid("logical name:=dg_search","htmltag:=TABLE").Object.Rows(i-1).Cells(7).FireEvent "ondblclick"
	'Msgbox Claim
	'Exit For

   Wait 10
   Val_Total = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=total0").GetROProperty("value")
  
  'Val_Total1 =Browser("opentitle:=Web.Strat Login").Page("title:=Web.Strat").Frame("name:=OutPatIFrameFoot").WebElement("html id:=LabelTotalAPCPaymentValue","html tag:=SPAN","height:=16").GetROProperty("value")
  
  
   MsgBox Val_Total
     'MsgBox Val_Total1   'WbfGrid("logical name:Table1")
	
'''	Val_Total=Datatable.Export "C:\Proj_WebStrat_UFT_Automation\FunctionalLibrary\WebStratSearchData.xlsx",2,"Global"
    Datatable.Value("Total",Global) = Val_Total
    
    End If	
    Exit For
	Next     
    'End If
   ' Call WT_Saveclaim()
   
    Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("text:=File","html tag:=A").Click


    Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("text:=Save \(Ctrl\+S\)").Click
   
   
    
     Wait 10
    
	Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").WbfTabStrip("html id:=TabStrip1").Select "Search"
    Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").WbfTabStrip("html id:=TabStrip1").Click
    
    Wait 2
    Browser("Web.Strat").Page("Web.Strat").Frame("IFrameSearch").WebButton("Clear").Click
    
    Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=IFrameSearch").WebList("name:=ddl_fld","htmltag:=SELECT").Select "Medical Record Number"
    Datatable.Export "C:\Proj_WebStrat_UFT_Automation\TestResults\WebStratSearchData.xlsx"
    Wait 15
    
   
'	Exit For
'	Next 
	Next
	
'	
'	wait 10
'	If Browser("name:=Web.Strat").WinObject("text:=Message from webpage").WinButton("text:=OK").exist then 
'
'       Browser("name:=Web.Strat").WinObject("text:=Message from webpage").WinButton("text:=OK").Click 
'         Claim = "Claim searched Unsucceful -Failed"
'
'    '  Reporter.ReportEvent micPass "Check search record","Claim searched successful-Passed"
'         
'         Else
'	
'	     SystemUtil.CloseDescendentProcesses
'
'     ' Reporter.ReportEvent micFail "Check again","Claim Searched UnSuccessful - Failed"
'     
'     Claim = "Claim Searched Successful - Passed"
'	
'End If
	
	

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
	
'-----------------------------------------------------------------------------
'Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Sync
'
'
''Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom","htmltag:=IFRAME").WbfGrid("htmlid:=Hcpcs","htmltag:=TABLE").WebEdit("name:=total0","html tag:=INPUT","type:=text").Getcelldata
'
'
'
'Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("text:=File","html tag:=A").Click
'
'
'Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("text:=Save \(Ctrl\+S\)").Click
'
'wait 10
'
'
'If Browser("name:=Web.Strat").WinObject("text:=Message from webpage").WinButton("text:=OK").exist then 
'
'         Browser("name:=Web.Strat").WinObject("text:=Message from webpage").WinButton("text:=OK").Click 
'         webpage = "Webstrat claim saved Unsucceful -Failed"
'         
'         Else
'	
'	    ' SystemUtil.CloseDescendentProcesses
'
'         webpage = "Webstrat claim saved Successful - Passed"
'         
'         End if
'
'MsgBox "Webstrat claim saved successfully"

'----------------------------------------------------------------------------

Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Sync

wait 2

Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").WebButton("name:=Logout","html id:=ButtonLogout").Click
	
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
'-----------------------------------------------------------------------------	
'Exit For
