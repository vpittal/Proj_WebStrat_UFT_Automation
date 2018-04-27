'Build Tests using reusable components

Dim objExcel,objWorkbook,objWorksheet
Set objExcel = CreateObject("Excel.Application")
Set objWorkbook = objExcel.Workbooks.open("C:\Proj_WebStrat_UFT_Automation\TestResults\TestResult.xlsx")
Set objWorksheet = objWorkbook.Worksheets(1)
i=2
'Login Test

objWorksheet.cells(i,1)= "WT_Login"
objWorksheet.cells(i,2)= WT_Login()
i=i+1

'Searching claim
objWorksheet.cells(i,1)="WT_Searchclaim"

 objWorksheet.cells(i,2)=WT_Searchclaim()
 i=i+1

'Save claim
objWorksheet.cells(i,1)="WT_Saveclaim"
objWorksheet.cells(i,2)=WT_Saveclaim()
i=i+1

'Logout
objWorksheet.cells(i,1)="WT_Logout"
objWorksheet.cells(i,2)=WT_Logout()
i=i+1

objWorkbook.Save
objExcel.Quit
Set objWorksheet = Nothing
Set objWorkbook = Nothing
Set objExcel = Nothing
