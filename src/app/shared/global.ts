export class global{
  /// error message
  public static genricError = 'Something went wrong';

  public static nameRegex = "^[a-zA-Z]+$";

  public static emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public static passwardRgex = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}";

  public static contactRegex = "^((\\+91-?)|0)?[0-9]{10}$";


  public static error:string="error";

  public static unathorize : string ='you are Unathoriz user';

  public static imageApiUrl='https://carpet.emarketking.in/public/images/finishing_ledger/';
}
