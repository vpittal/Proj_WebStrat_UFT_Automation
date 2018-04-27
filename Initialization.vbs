Dim objQTP
Set objQTP = CreateObject("QuickTest.Application")
objQTP.Visible = True 'To view the UFT tool during the execution
objQTP.Launch 'To Launch UFT Tool
objQTP.Open "C:\Proj_WebStrat_UFT_Automation\Drivers\Driver"
objQTP.Test.Run 'To run the test

objQTP.Test.Close 'To close Driver script
objQTP.Quit 'To close UFT Tool
Set objQTP = Nothing 'To release the memory