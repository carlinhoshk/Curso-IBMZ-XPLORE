-------------------------------------------------------------------
RACF commands used to setup RACF2 challenge
-------------------------------------------------------------------
ag techteam
-------------------------------------------------------------------
   - Add Group RACF command define group name techteam
       group is collection of subject id's
       any id connected to group techteam has all permissions
       assigned to the group
-------------------------------------------------------------------
ad 'techteam.**' uacc(none)
-------------------------------------------------------------------
   - Add Data Set profile RACF command
       all data set profiles are in class(dataset)
-------------------------------------------------------------------
permit 'techteam.**' class(dataset) id(techteam) access(read)
-------------------------------------------------------------------
  - give a defined id (the subject) access to a protected object
    where the protected object is defined profile techteam.members
    and techteam.members profile is an entry in class(dataset)
  - the access given in above example is read
  - id's beginning with student are groups of id's
  - each participant id is an entry within a single student RACF group
  - any id connected to group(techteam) is permitted read access
     to data set names beginning with techteam
-------------------------------------------------------------------
ad 'techteam.members' uacc(none)
-------------------------------------------------------------------
   - techteam.members data set profile with access of none
     supercedes techteam.** data set profile
-------------------------------------------------------------------
permit 'techteam.members' class(dataset) id(student9) access(read)
permit 'techteam.members' class(dataset) id(student8) access(read)
permit 'techteam.members' class(dataset) id(student7) access(read)
permit 'techteam.members' class(dataset) id(student6) access(read)
permit 'techteam.members' class(dataset) id(student5) access(read)
permit 'techteam.members' class(dataset) id(student4) access(read)
permit 'techteam.members' class(dataset) id(student3) access(read)
permit 'techteam.members' class(dataset) id(student2) access(read)
permit 'techteam.members' class(dataset) id(student1) access(read)
permit 'techteam.members' class(dataset) id(student)  access(read)
permit 'techteam.members' class(dataset) id(tech)     access(update)
-------------------------------------------------------------------
  - give a defined id (the subject) access to a protected object
    where the protected object is defined profile techteam.members
    and techteam.members profile is an entry in class(dataset)
  - the access given in above example is read
  - id's beginning with student are groups of id's
  - each participant id is an entry within a single student RACF group
-------------------------------------------------------------------
TECHTEAM.SETUP.ZXPLORE.RACF
    includes RACF commands used to protect zXplore objects
    and REXX routines used to build RACF ADDUSER commands, etc.
