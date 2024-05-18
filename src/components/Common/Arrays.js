const courtName = ['District & Sessions Judge', 'Additional District & Sessions Judge', 
                        'Civil Judge (Sr.Div.) & Assistant Sessions Judge',
                        'Chief Judicial Magistrate', 'Additional Chief Judicial Magistrate'];
const caseTypeArr = ['Civil','Criminal'];
const criminalCaseCategoryArr = [
    'Bail Application','Misc Case','Sessions','Criminal Appeal',
    'Criminal Revision','Special POCSO','Special NDPS','Special Electricity',
    'Special P & C', 'Special Case', 'Special Child','Misc Case','Special Land Grabbing',
    'Special Witch Hunting'
 ];
 const civilCaseCategoryArr = [
    'Title Appeal','Money Appeal','Misc Civil Appeal','Misc Appeal', 'Title Suit(Probate)','Misc Succession',
    'Misc Guardianship','Title Suit(D)', 'Title Suit(M)','Title Suit(R)','Land Acquisition','Misc(j)',
    'Consumer Act. Cases','Money Execution Cases','Misc Probate','Misc T','Misc Revocation',
 ];
 const statusArr = ['Pending', 'Disposed', 'Transfer'];
 const disposedTypeArr = ['Contested', 'Uncontested'];

 const BASE_URL = 'http://localhost:5050/api/v1/cases/';

 export {courtName, caseTypeArr, criminalCaseCategoryArr, 
   civilCaseCategoryArr, statusArr, disposedTypeArr, BASE_URL};