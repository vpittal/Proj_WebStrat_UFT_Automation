'Function excel_value(user,pwd,i,text)
'Set myxls =CreateObject("excel.application")
'myxls.Workbooks.Open "C:\Users\vpittal\Desktop\myExcel.xlsx"
'
'Set mysheet = myxls.ActiveWorkbook.WorkSheets("Details")
'
'j=j+1
'
'mysheet.cells(j,4).value=user
'mysheet.cells(j,5).value=pwd
'mysheet.cells(j,6).value=text
'
'myxls.ActiveWorkbook.Save
'
''myxls.Aplication.Quit
'
'Set mysheet = Nothing
'Set myxls = Nothing


'Extracting data from web page to an Excel sheet

Set desc=description.Create
desc("micclass").value="Link"

Set obj_link=browser("creationtime:=0").page("title:=.*").ChildObjects(desc)

datatable.GlobalSheet.AddParameter"Links",""

For i=0 To obj_link.count-1 Step 1
    datatable.SetCurrentRow(i+1)
    
    datatable("Links")= obj_link(i).getRoproperty("name")
    
    
    Next
    
    datetable.Export "C:\Users\vpittal\Desktop\myExcel.xlsx"

