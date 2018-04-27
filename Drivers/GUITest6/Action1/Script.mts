

'=====================================================================
'Create a new Microsoft Excel object
Set myExcel = createobject("excel.application")
'To make Excel visible
myExcel.Application.Visible = true
myExcel.Workbooks.Add
'MyExcel.worksheets(1).Cells(1,1). Value = "Scenario Id"
'MyExcel.worksheets(1).Cells(1,2).Value = "Scenario Name"
'MyExcel.worksheets(1).Cells(1,3).Value = "Date"
'MyExcel.worksheets(1).Cells(1,4).Value = "Testing"
'MyExcel.worksheets(1).Columns(1).ColumnWidth = 10
'MyExcel.worksheets(1).Columns(2).ColumnWidth = 40
'MyExcel.worksheets(1).Columns(3).ColumnWidth = 20
'MyExcel.worksheets(1).Columns(4).ColumnWidth = 20

MyExcel.Cells(2,1).Value = "Test_01"
MyExcel.Cells(2,2).Value = "Monday"
MyExcel.Cells(3,1).Value = "Test_02"
MyExcel.Cells(3,2).Value = "Thursday"
MyExcel.Cells(4,1).Value = "Test_03"
MyExcel.Cells(4,2).Value = "friday"


'MyExcel.GetSaveAsFilename "C:\Users\vpittal\Desktop\Uft Level1\guru91.xlsx"

'MyExcel.ActiveWorkbook.Save "C:\Users\vpittal\Desktop\Uft Level1\guru88.xlsx"

'MyExcel.Export "C:\Users\vpittal\Desktop\Uft Level1\guru81.xlsx"

'MyExcel.Workbooks.Close
MyExcel.Application.Quit
'objExcel.Quit
'blnFlag = False
'=============================================================================
'Function WriteResulttoExcel(ID, TestResult)
'  'Creating the Excel Object
'  set objExcel = createobject("excel.application")
'  'Creating the Workbooks object
'  set objWB = objExcel.workbooks.open ("C:\Users\vpittal\Desktop\Uft Level1\guru91.xlsx")
'  'Creating the sheet object
'  set objsheet = objWB.worksheets(1)
'  ' Write test results to excel sheet
'  rws=objsheet.UsedRange.Rows.count
'  objsheet.cells(1,rws+1).Value= ID
'  objsheet.cells(2,rws+1).Value= TestResult
'  'Saving the workbook after changes
'  objWB.save
'  'closing the workbook
'  objWB.close
' 'Quit the Excel and destroying the Excel object
'  objExcel.Quit
'  set objExcel=nothing
'End Function
'
'Call WriteResulttoExcel(ID, TestResult)
