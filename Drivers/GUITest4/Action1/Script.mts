'Create a new Microsoft Excel object
Set myExcel = createobject("excel.application")
'To make Excel visible
myExcel.Application.Visible = true
myExcel.Workbooks.Add
MyExcel.worksheets(1).Cells(1,1). Value = "Scenario Id"
MyExcel.worksheets(1).Cells(1,2).Value = "Scenario Name"
MyExcel.worksheets(1).Columns(1).ColumnWidth = 10
MyExcel.worksheets(1).Columns(2).ColumnWidth = 40
MyExcel.worksheets(1).Columns(3).ColumnWidth = 20
MyExcel.worksheets(1).Columns(4).ColumnWidth = 20

MyExcel.Cells(2,1).Value = "Monday"
MyExcel.Cells(2,2).Value = "Teusday"
'MyExcel.GetSaveAsFilename "C:\Users\vpittal\Desktop\Uft Level1\guru99.xlsx"

MyExcel.ActiveWorkbook.SaveAs "C:\Users\vpittal\Desktop\Uft Level1\guru99.xlsx"
MyExcel.e
MyExcel.Workbooks.Close
MyExcel.Application.Quit
'objExcel.Quit
'blnFlag = False
