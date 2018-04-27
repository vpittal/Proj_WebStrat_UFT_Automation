
'******************************************************************************************************************
'                           WebStrat Automation

' Function Name : subcreateExcel -WebStratSearchData
' Input Parameters : Name of the File to be created along with complete path
' Output Parameters : None0
' Task : To create the Resultant Result Sheet 
' Author : Venu Pittala

'******************************************************************************************************************
On Error Resume Next

Call WT_Login()

'Call WT_Searchclaim()
'
'Call WT_DemographicScreen()
''
'Call WT_Logout()


'******************************************************************************************************************
	
'----------------------------------------------------------------------------------------------

'Demographic Screen
'---------------------------------------------------------------------------------------------------------
Wait 10

DataTable.AddSheet "Demo"

'Import data from an External file
dataTable.importsheet "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData.xlsx",4,5

MRowCount1 = DataTable.GetSheet("Demo").GetRowCount
 

For k = 1 To MRowCount1
	
	DataTable.SetCurrentRow(k) 
	
	'Msgbox MRowCount1
	  'first 2 is column Id ,next 2 is Sheet id
	'TSExecution = DataTable(14, 5)
	
	'If UCase(TSExecution)= "Y" Then
	
	PatientType = DataTable(1,5) 
	NPI = DataTable(2,5)
	Taxonomy = DataTable(3,5)
	FacilityID = DataTable(4,5)
	PayerID = DataTable(5,5)
	MedRec = DataTable(6,5)
	FromDate = DataTable(7,5)
	
	ToDate = DataTable(8,5)
	Sex = DataTable(9,5)
	DOB = DataTable(10,5)
	Dstat = DataTable(11,5)
	BillType = DataTable(12,5)
	Coder = DataTable(13,5)
	
	
	DX = DataTable(15,5) 
	POA = DataTable(16,5)
	L1Rev = DataTable(17,5)
	L1HCPCS = DataTable(18,5)
	L1Units = DataTable(19,5)
	L1Date = DataTable(20,5)
	L1Charges = DataTable(21,5)
	L2Rev = DataTable(22,5)
	L2HCPCS = DataTable(23,5)
	L2Units = DataTable(24,5)
	L2Date = DataTable(25,5)
	L2Charges = DataTable(26,5)
	
		'Msgbox PatientType
		
		'Msgbox FacilityID
		'Msgbox BillType
		
'	End If
'	
'Next


Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=txtDropDownPatType").Set PatientType '"02"


'Browser("Web.Strat").Page("Web.Strat").Frame("DemographicsIFrame").WebEdit("txtDropDownPatType").Set "02"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=txtNPI").Set NPI
Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=txtTaxonomy").Set Taxonomy
Wait 3
Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=DropDownFacilityID").Set FacilityID '"111"
Wait 2
Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=txtDropDownPayerID","htmltag:=INPUT").Set PayerID ' "04301392"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxPtIDMedRec").Set MedRec '"WS.18Q1.Dummy"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxAdmitDate").Set FromDate ' "01/01/2018"
Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxDischDate").Set ToDate ' "01/01/2018"


Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxSex").Set Sex '"M"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxBirth").Set DOB '"01/01/1977"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=txtDropDownDStat").Set Dstat ' "01"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=WebEdit","html id:=TextBoxBillType","htmltag:=INPUT","height:=22","visible:=True","type:=text").Set BillType ' "131"
'Browser("Web.Strat").Page("Web.Strat").Frame("DemographicsIFrame").WebEdit("WebEdit").Set BillType

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxCoder").Set Coder ' "18Q1R2"


Wait 5


Browser("name:=Web.Strat","opentitle:=Web.Strat Login").page("title:=Web.Strat").WbfTabStrip("html id:=TabStrip1").Select "Summary"
Browser("name:=Web.Strat","opentitle:=Web.Strat Login").page("title:=Web.Strat").WbfTabStrip("html id:=TabStrip1").Click

'-----------------------------------------------------------------------------------------------

'Summary Screen
'=============================


 

'For m = 1 To MRowCount2
	
	'DataTable.SetCurrentRow(m) 
	
	'Msgbox MRowCount2
	  'first 2 is column Id ,next 2 is Sheet id
	'TSExecution = DataTable(13, 6)
	
	'If UCase(TSExecution)= "Y" Then
	

    ' Msgbox DX
    ' Msgbox L1Rev
'	  End If
'	
'Next

Wait 2
Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=InPatIFrameL").WebEdit("name:=dx0","html tag:=INPUT").Set DX '"B699"
Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=InPatIFrameL").WebEdit("name:=Onset0","html tag:=INPUT").Set POA '" "

'Line1
Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=rev0","html tag:=INPUT","class:=HCPCSTextboxLeftAlign").Set L1Rev '"0100"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=hcpcs0","html tag:=INPUT").Set L1HCPCS ' "C9014"
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=M10","html tag:=INPUT").Set " "
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=M20","html tag:=INPUT").Set " "
Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=Units0","html tag:=INPUT").Set L1Units ' "1"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=date0","html tag:=INPUT").Set L1Date'"01/01/2018"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=charges0","html tag:=INPUT").Set L1Charges '"500"

'Line2
Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=rev1","html tag:=INPUT").Set L2Rev '"0100"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=hcpcs1","html tag:=INPUT").Set L2HCPCS '"10061"
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=M10","html tag:=INPUT").Set " "
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=M20","html tag:=INPUT").Set " "
Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=Units1","html tag:=INPUT").Set L2Units '"1"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=date1","html tag:=INPUT").Set L1Date '"01/01/2018"

Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=charges1","html tag:=INPUT").Set L2Charges '"500"

Wait 2

'-----------------------------------------------------------

'Group and Price the claim 
'=============================
Browser("name:=Web.Strat").Page("title:=Web.Strat").Link("text:=Functions","html tag:=A").Click


 'Browser("name:=Web.Strat").Page("title:=Web.Strat").Link("name:=Group and Price (Ctrl+G)","x:=738","y:=54","html tag:=A").Click

Browser("Web.Strat").Page("Web.Strat").Link("Group and Price (Ctrl+G)").Click ' WebTable("Group and Price (Ctrl+G)").

Wait 5
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Link("Group and Price (Ctrl+G)").Click

'----------------------------------------------------------------------------
'Capture the Total Price,Status code,Return code and APC 
'=================================
DataTable.AddSheet "Summary"

'Import data from an External file
dataTable.importsheet "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData.xlsx",5,6
'dataTable.ExportSheet "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData.xlsx",5,6


'MRowCount2 = DataTable.GetSheet("Summary").GetRowCount

'For j = 1 To Step 1
''
''
' Datatable.SetCurrentRow(j)

  Wait 5
   If PatientType="02" Then   
   'Line1
   Val_Total1 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=total0").GetROProperty("value")
   APC1 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apc0").GetROProperty("value")
   ST1 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcstat0").GetROProperty("value") 
   RC1 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcrc0").GetROProperty("value") 
   'Line2
   Val_Total2 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=total1").GetROProperty("value")
   APC2 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apc1").GetROProperty("value")
   ST2 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcstat1").GetROProperty("value") 
   RC2 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcrc1").GetROProperty("value") 
   'Line3
   Val_Total3 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=total2").GetROProperty("value")
   APC3 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apc2").GetROProperty("value")
   ST3 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcstat2").GetROProperty("value") 
   RC3 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcrc2").GetROProperty("value") 

   Value_TotalPayment = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("html id:=OutPatIFrameFoot").WbfGrid("html id:=Table1").GetCellData(3,8)
  
   If Value_TotalPayment<>"" Then
   	  Datatable.Value("Status",6) = "Pass"
   	  Else
   	  Datatable.Value("Status",6) = "Fail"
	End If
	
	Datatable.Value("MedicalRecordNumber",6) = MedRec
    Datatable.Value("PatientType",6)= PatientType
  	
	Datatable.Value("Total1",6) = Val_Total1
    Datatable.Value("APC1",6) = APC1
    Datatable.Value("St1",6) = ST1
    Datatable.Value("RC1",6) = RC1
    
    Datatable.Value("Total2",6) = Val_Total2
    Datatable.Value("APC2",6) = APC2
    Datatable.Value("St2",6) = ST2
    Datatable.Value("RC2",6) = RC2
    
    Datatable.Value("Total3",6) = Val_Total3
    Datatable.Value("APC3",6) = APC3
    Datatable.Value("St3",6) = ST3
    Datatable.Value("RC3",6) = RC3
    
    Datatable.Value("TotalReimbursement",6) = Value_TotalPayment 
    
    Else
    
    
   Val_DRG = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=InPatIFrameFoot").WebTable("name:=Related DRGs").GetCellData(1,7)

  'MsgBox Val_DRG

   If Val_DRG<>"" Then
   	  Datatable.Value("Status",6) = "Pass"
   	  Else
   	  Datatable.Value("Status",6) = "Fail"
	End If
    Val_Base = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=InPatIFrameFoot").WebTable("name:=Related DRGs").GetCellData(1,11)

    'MsgBox  Val_Base
    Val_TotalReimburse = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=InPatIFrameFoot").WebTable("name:=Related DRGs").GetCellData(4,10)

    'MsgBox Val_TotalReimburse
    
	Datatable.Value("PatientType",6)= PatientType
	
	Datatable.Value("DRG",6) = Val_DRG
    
    Datatable.Value("Base",6) = Val_Base
    
    Datatable.Value("TotalReimbursement",6) = Val_TotalReimburse
     
    
      End If
    
    'Next
    'New Claim entering
    
    Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("text:=File","html tag:=A").Click
    Browser("Web.Strat").Page("Web.Strat").Link("New (Alt+N)").Click
    'Browser("Web.Strat").Dialog("VBScript").WinButton("No").Click
    Browser("Web.Strat").Dialog("VBScript").WinButton("Yes").Click
    Wait 30
    
'   End If
''	
Datatable.Export "C:\Proj_WebStrat_UFT_Automation\TestResults\WebStratSearchData15.xlsx"
Next

'Datatable.Export "C:\Proj_WebStrat_UFT_Automation\TestResults\WebStratSearchData15.xlsx"
'---------------------------------------------------------


'Delete the claim
'==========================

'    Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("text:=File","html tag:=A").Click
'
'
'    Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("name:=Delete").Click
'    Browser("Web.Strat").Dialog("Message from webpage").WinButton("OK").Click

'---------------------------------------------------------------------------------------
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

'
'
''----------------------------------------------------------------------------------------------
'
''Demographic Screen
''---------------------------------------------------------------------------------------------------------
'Wait 10
'
'DataTable.AddSheet "Demo"
'
'Import data from an External file
'dataTable.importsheet "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData.xlsx",4,5
'
'MRowCount1 = DataTable.GetSheet("Demo").GetRowCount
' 
'
'For k = 1 To MRowCount1
'	
'	DataTable.SetCurrentRow(k) 
'	
'	Msgbox MRowCount1
'	  first 2 is column Id ,next 2 is Sheet id
'	TSExecution = DataTable(14, 5)
'	
'	If UCase(TSExecution)= "Y" Then
'	
'	PatientType = DataTable(1,5) 
'	NPI = DataTable(2,5)
'	Taxonomy = DataTable(3,5)
'	FacilityID = DataTable(4,5)
'	PayerID = DataTable(5,5)
'	MedRec = DataTable(6,5)
'	FromDate = DataTable(7,5)
'	
'	ToDate = DataTable(8,5)
'	Sex = DataTable(9,5)
'	DOB = DataTable(10,5)
'	Dstat = DataTable(11,5)
'	BillType = DataTable(12,5)
'	Coder = DataTable(13,5)
'	
'	
'	DX = DataTable(15,5) 
'	POA = DataTable(16,5)
'	L1Rev = DataTable(17,5)
'	L1HCPCS = DataTable(18,5)
'	L1Units = DataTable(19,5)
'	L1Date = DataTable(20,5)
'	L1Charges = DataTable(21,5)
'	L2Rev = DataTable(22,5)
'	L2HCPCS = DataTable(23,5)
'	L2Units = DataTable(24,5)
'	L2Date = DataTable(25,5)
'	L2Charges = DataTable(26,5)
'	
'		Msgbox PatientType
'		
'		Msgbox FacilityID
'		Msgbox BillType
'		
'	End If
'	
'Next
'
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=txtDropDownPatType").Set PatientType '"02"
'
'
'Browser("Web.Strat").Page("Web.Strat").Frame("DemographicsIFrame").WebEdit("txtDropDownPatType").Set "02"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=txtNPI").Set NPI
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=txtTaxonomy").Set Taxonomy
'Wait 3
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=DropDownFacilityID").Set FacilityID '"111"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=txtDropDownPayerID","htmltag:=INPUT").Set PayerID ' "04301392"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxPtIDMedRec").Set MedRec '"WS.18Q1.Dummy"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxAdmitDate").Set FromDate ' "01/01/2018"
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxDischDate").Set ToDate ' "01/01/2018"
'
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxSex").Set Sex '"M"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxBirth").Set DOB '"01/01/1977"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=txtDropDownDStat").Set Dstat ' "01"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=WebEdit","html id:=TextBoxBillType","htmltag:=INPUT","height:=22","visible:=True","type:=text").Set BillType ' "131"
'Browser("Web.Strat").Page("Web.Strat").Frame("DemographicsIFrame").WebEdit("WebEdit").Set BillType
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=DemographicsIFrame").WebEdit("name:=TextBoxCoder").Set Coder ' "18Q1R2"
'
'
'Wait 5
'
'
'Browser("name:=Web.Strat","opentitle:=Web.Strat Login").page("title:=Web.Strat").WbfTabStrip("html id:=TabStrip1").Select "Summary"
'Browser("name:=Web.Strat","opentitle:=Web.Strat Login").page("title:=Web.Strat").WbfTabStrip("html id:=TabStrip1").Click
'
'-----------------------------------------------------------------------------------------------
'
'Summary Screen
'=============================
'
'
' 
'
'For m = 1 To MRowCount2
'	
'	DataTable.SetCurrentRow(m) 
'	
'	Msgbox MRowCount2
'	  first 2 is column Id ,next 2 is Sheet id
'	TSExecution = DataTable(13, 6)
'	
'	If UCase(TSExecution)= "Y" Then
'	
'
'     Msgbox DX
'     Msgbox L1Rev
'	  End If
'	
'Next
'
'Wait 2
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=InPatIFrameL").WebEdit("name:=dx0","html tag:=INPUT").Set DX '"B699"
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=InPatIFrameL").WebEdit("name:=Onset0","html tag:=INPUT").Set POA '" "
'
'Line1
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=rev0","html tag:=INPUT","class:=HCPCSTextboxLeftAlign").Set L1Rev '"0100"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=hcpcs0","html tag:=INPUT").Set L1HCPCS ' "C9014"
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=M10","html tag:=INPUT").Set " "
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=M20","html tag:=INPUT").Set " "
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=Units0","html tag:=INPUT").Set L1Units ' "1"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=date0","html tag:=INPUT").Set L1Date'"01/01/2018"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=charges0","html tag:=INPUT").Set L1Charges '"500"
'
'Line2
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=rev1","html tag:=INPUT").Set L2Rev '"0100"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=hcpcs1","html tag:=INPUT").Set L2HCPCS '"10061"
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=M10","html tag:=INPUT").Set " "
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=M20","html tag:=INPUT").Set " "
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=Units1","html tag:=INPUT").Set L2Units '"1"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=date1","html tag:=INPUT").Set L1Date '"01/01/2018"
'
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=charges1","html tag:=INPUT").Set L2Charges '"500"
'
'Wait 2
'
'-----------------------------------------------------------
'
'Group and Price the claim 
'=============================
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Link("text:=Functions","html tag:=A").Click
'
'
' Browser("name:=Web.Strat").Page("title:=Web.Strat").Link("name:=Group and Price (Ctrl+G)","x:=738","y:=54","html tag:=A").Click
'
'Browser("Web.Strat").Page("Web.Strat").Link("Group and Price (Ctrl+G)").Click ' WebTable("Group and Price (Ctrl+G)").
'
'Wait 5
'Browser("name:=Web.Strat").Page("title:=Web.Strat").Link("Group and Price (Ctrl+G)").Click
'
'----------------------------------------------------------------------------
'Capture the Total Price,Status code,Return code and APC 
'=================================
'DataTable.AddSheet "Summary"
'
'rcount=DataTable.GetSheet("Summary").GetCurrentRow
'
'
''Import data from an External file
'dataTable.importsheet "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData.xlsx",5,6
''dataTable.ExportSheet "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData.xlsx",5,6
'
'For j = 1 To rcount
'	
'MRowCount2 = DataTable.GetSheet("Summary").GetParameter
'
'For j = 1 To MRowCount2
''
''
' Datatable.SetCurrentRow(j)
'
'Set myxls = CreateObject("excel.application")
'
'myxls.Application.Visible = true
'myxls.Workbooks.Add
'
'myxls.Workbooks.open "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData.xlsx"
'
'Set Datatable = myxls.ActiveWorkbook.Worksheets("Summary")
'
'j=k+1
'
'
'
'  Wait 5
'   If PatientType="02" Then   
'   Line1
'   Val_Total1 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=total0").GetROProperty("value")
'   APC1 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apc0").GetROProperty("value")
'   ST1 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcstat0").GetROProperty("value") 
'   RC1 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcrc0").GetROProperty("value") 
'   Line2
'   Val_Total2 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=total1").GetROProperty("value")
'   APC2 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apc1").GetROProperty("value")
'   ST2 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcstat1").GetROProperty("value") 
'   RC2 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcrc1").GetROProperty("value") 
'   Line3
'   Val_Total3 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=total2").GetROProperty("value")
'   APC3 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apc2").GetROProperty("value")
'   ST3 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcstat2").GetROProperty("value") 
'   RC3 = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=OutPatIFrameBottom").WebEdit("name:=apcrc2").GetROProperty("value") 
'
'   Value_TotalPayment = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("html id:=OutPatIFrameFoot").WbfGrid("html id:=Table1").GetCellData(3,8)
'  
'  Set myxls = CreateObject("excel.application")
'
'  myxls.Application.Visible = true
'  myxls.Workbooks.Add
'
'  myxls.Workbooks.open "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData.xlsx"
'
'  Set Datatable = myxls.ActiveWorkbook.Worksheets("Summary")
'
'j=k+1
'  
'   If Value_TotalPayment<>"" Then
'   	  Datatable.Value("Status",6) = "Pass"
'   	  Else
'   	  Datatable.Value("Status",6) = "Fail"
'	End If
'	
'	Datatable.Value("MedicalRecordNumber",6) = MedRec
'    Datatable.Value("PatientType",6)= PatientType
'  	
'	Datatable.Value("Total1",6) = Val_Total1
'    Datatable.Value("APC1",6) = APC1
'    Datatable.Value("St1",6) = ST1
'    Datatable.Value("RC1",6) = RC1
'    
'    Datatable.Value("Total2",6) = Val_Total2
'    Datatable.Value("APC2",6) = APC2
'    Datatable.Value("St2",6) = ST2
'    Datatable.Value("RC2",6) = RC2
'    
'    Datatable.Value("Total3",6) = Val_Total3
'    Datatable.Value("APC3",6) = APC3
'    Datatable.Value("St3",6) = ST3
'    Datatable.Value("RC3",6) = RC3
'    
'    Datatable.Value("TotalReimbursement",6) = Value_TotalPayment 
'    
'    
'    myxls.Workbooks.SaveAs "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData4.xlsx"
'    
'    myxls.Workbooks.save
'   
'   Set myxls= nothing
'    
'    Else
'    
'    
'   Val_DRG = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=InPatIFrameFoot").WebTable("name:=Related DRGs").GetCellData(1,7)
'
'  MsgBox Val_DRG
'
'   If Val_DRG<>"" Then
'   	  Datatable.Value("Status",6) = "Pass"
'   	  Else
'   	  Datatable.Value("Status",6) = "Fail"
'	End If
'    Val_Base = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=InPatIFrameFoot").WebTable("name:=Related DRGs").GetCellData(1,11)
'
'    MsgBox  Val_Base
'    Val_TotalReimburse = Browser("name:=Web.Strat").Page("title:=Web.Strat").Frame("name:=InPatIFrameFoot").WebTable("name:=Related DRGs").GetCellData(4,10)
'
'    MsgBox Val_TotalReimburse
'    
'	Datatable.Value("PatientType",6)= PatientType
'	
'	Datatable.Value("DRG",6) = Val_DRG
'    
'    Datatable.Value("Base",6) = Val_Base
'    
'    Datatable.Value("TotalReimbursement",6) = Val_TotalReimburse
'     
'    DataTable.AddSheet "Summary"
'
'    Import data from an External file
'    dataTable.importsheet "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData.xlsx",5,6
'    dataTable.Export "C:\Proj_WebStrat_UFT_Automation\TestData\WebStratSearchData.xlsx",5,6
'    
'    Datatable.Export "C:\Proj_WebStrat_UFT_Automation\TestResults\WebStratSearchData.xlsx",5,6
'      End If
'    
'    Next
'    New Claim entering
'    
'    Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("text:=File","html tag:=A").Click
'    Browser("Web.Strat").Page("Web.Strat").Link("New (Alt+N)").Click
'    Browser("Web.Strat").Dialog("VBScript").WinButton("No").Click 
'
'    Browser("Web.Strat").Dialog("VBScript").WinButton("Yes").Click
'    wait 30
'   End If
'	
'Next
'Next
'Datatable.Export "C:\Proj_WebStrat_UFT_Automation\TestResults\WebStratSearchData15.xlsx"
'
'
'---------------------------------------------------------
'
'
'Delete the claim
'==========================
'
'    Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("text:=File","html tag:=A").Click
'
'
'    Browser("opentitle:=Web.Strat Login").page("title:=Web.Strat").Link("name:=Delete").Click
'    Browser("Web.Strat").Dialog("Message from webpage").WinButton("OK").Click
'
'---------------------------------------------------------------------------------------
'
'Next
