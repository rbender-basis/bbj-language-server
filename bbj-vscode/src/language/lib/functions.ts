export const builtinFunctions = `


library

/@@

NULL()


#### Syntax
\`NULL()\`

#### Description
The NULL() function returns a Java null value. It is typically used to check for a null value returned from a Java function.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/null_function_return_java_null_value.htm
@/
NULL(): any


/@@

ABS(num,ERR=lineref)


#### Syntax
\`ABS(num,ERR=lineref)\`

#### Description
The ABS() function returns the absolute value of its numeric argument.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/abs_function.htm
@/
ABS(num,ERR:lineref): any


/@@

ADJN(val,ERR=lineref)


#### Syntax
\`ADJN(val,ERR=lineref)\`

#### Description
The ADJN() function returns an 8-byte binary string suitable for string comparisons of numeric values. It may be used in two ways:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/adjn_function.htm
@/
ADJN(val,ERR:lineref): any


/@@

AND(string,string,ERR=lineref)


#### Syntax
\`AND(string,string,ERR=lineref)\`

#### Description
The AND() function joins two or more expressions and returns the result. Both arguments must be the same length.

The rules for AND() are:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/and_function.htm
@/
AND(string,string,ERR:lineref): any


/@@

ARGV(int,ERR=lineref)


#### Syntax
\`ARGV(int,ERR=lineref)\`

#### Description
The ARGV() function returns the arguments passed to PRO/5 when invoked. ARGC returns the number of arguments passed on the command line. ARGV(0) always returns the fully qualified name of the PRO/5 executable. User-defined arguments are returned in ARGV(1), ARGV(2), etc., up to ARGV(ARGC-1). If there are no user-defined arguments, then ARGC is 1.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/argv_function.htm
@/
ARGV(int,ERR:lineref): any


/@@

ASC(string,ERR=lineref)


#### Syntax
\`ASC(string,ERR=lineref)\`

#### Description
The ASC() function returns the ASCII numeric value of the first character in a string.The following statement assigns the ASCII value of the first character in CHR$ to the numeric variable VALUE.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/asc_function.htm
@/
ASC(string,ERR:lineref): any


/@@

ATH(string,ERR=lineref)


#### Syntax
\`ATH(string,ERR=lineref)\`

#### Description
The ATH() function converts a human-readable hexadecimal string to the internal form.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/ath_function.htm
@/
ATH(string,ERR:lineref): any


/@@

ATN(num,precis,ERR=lineref)


#### Syntax
\`ATN(num,precis,ERR=lineref)\`

#### Description
The ATN() function returns the arctangent of num. The result is in radians and is in the range -pi/2 to pi/2.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/atn_function.htm
@/
ATN(num,precis,ERR:lineref): any


/@@

BIN(intA,intB,ERR=lineref)


#### Syntax
\`BIN(intA,intB,ERR=lineref)\`

#### Description
For BBj-specific information, see the BBj BIN() Function.

The BIN() function converts a decimal into a binary string.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/bin_function.htm
@/
BIN(intA,intB,ERR:lineref): any


/@@

BSZ(int,ERR=lineref)


#### Syntax
\`BSZ(int,ERR=lineref)\`

#### Description
The BSZ() function() prevents an ERROR message from being issued and always returns a 0,. It is included for syntax compatibility with older versions of Business BASIC only. int must be in the range of 0 to 15.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/bsz_function.htm
@/
BSZ(int,ERR:lineref): any


/@@

CHANOPT(channelno,ERR=lineref)


#### Syntax
\`CHANOPT(channelno,ERR=lineref)\`

#### Description
The CHANOPT() function returns the current settings (general or specific information about the file or device) that are accessible using the CHANOPT verb for the specified channel.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/chanopt_function.htm
@/
CHANOPT(channelno,ERR:lineref): any


/@@

CHR(int,ERR=lineref)


#### Syntax
\`CHR(int,ERR=lineref)\`

#### Description
The CHR() function returns the ASCII value of an integer.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/chr_function.htm
@/
CHR(int,ERR:lineref): any


/@@

CLIPISFORMAT (fmt[,ERR=lineref])


#### Syntax
\`CLIPISFORMAT (fmt[,ERR=lineref])\`

#### Description
For BBj-specific information, see the Clipboard Verbs and Functions.

The CLIPISFORMAT() function checks the availability of clipboard formats for data to be copied to the application. A non-zero value indicates that the format is available and can be retrieved by the application. Clipboard formats between 1 and 1023 are reserved by Windows. Clipboard format 1 is the identifying format for plain text. Clipboard format 8 is the identifying format for bitmaps and should be copied or pasted to a file with CLIPFROMFILE and CLIPTOFILE.
&#160;

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/clipisformat_function.htm
@/
CLIPISFORMAT (fmt,ERR:lineref): any


/@@

CLIPREGFORMAT (name[,ERR=lineref])


#### Syntax
\`CLIPREGFORMAT (name[,ERR=lineref])\`

#### Description
For BBj-specific information, see the Clipboard Verbs and Functions.

The CLIPREGFORMAT() function is used to register clipboard formats, which must be defined before data can be placed on the clipboard. To Windows, the string is case-insensitive. Therefore, "MY FORMAT" cannot be used, if an existing format were named "my format." The return value is a unique number used to define the format of data to be placed on the clipboard. If the format has already been registered, its existing format number is returned. Unlike other clipboard functions and verbs, the clipboard does not need to be locked before using CLIPREGFORMAT().

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/clipregformat_function.htm
@/
CLIPREGFORMAT (name,ERR:lineref): any


/@@

CLIPTOSTR (fmt[,ERR=lineref])


#### Syntax
\`CLIPTOSTR (fmt[,ERR=lineref])\`

#### Description
For BBj-specific information, see the Clipboard Verbs and Functions.

The CLIPTOSTR() function returns a string in an fmt-parameter-specified clipboard format that can be processed by the application. If fmt is 1, the returned string is probably ASCII text. Any other specified format must be matched against the application's ability to process it. For formats 1 (text) and 7 (OEM text), the null terminator is removed before the string is returned. If the requested format is unavailable, an !ERROR=92 is generated. In this case, the error code returned by windows and placed in TCB(10) is unreliable; Visual PRO/5 often sets TCB(10) to 93 to indicate that although windows did not return an error code, the operation failed.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/cliptostr_function.htm
@/
CLIPTOSTR (fmt,ERR:lineref): any


/@@

COS(num,precis,ERR=lineref)


#### Syntax
\`COS(num,precis,ERR=lineref)\`

#### Description
The COS() function returns the cosine of the specified value. The result will be in the range -1 to 1.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/cos_function.htm
@/
COS(num,precis,ERR:lineref): any


/@@

CPL(stringA,stringB,ERR=lineref)


#### Syntax
\`CPL(stringA,stringB,ERR=lineref)\`

#### Description
For BBj-specific information, see the CPL() Function - BBj.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/cpl_function.htm
@/
CPL(stringA,stringB,ERR:lineref): any


/@@

CRC(stringA,stringB,ERR=lineref)


#### Syntax
\`CRC(stringA,stringB,ERR=lineref)\`

#### Description
The CRC() function returns a 2-byte string containing a special checksum of stringA. If stringB is given, it must be 2 bytes long and provide a "seed" for the checksum. Otherwise, PRO/5 uses a seed of $0000$. CRC() can be used for verifying data transmissions over communication lines.

Taking the CRC() of a long string that may not fit in memory can be done one piece at a time because CRC(A$+B$) = CRC(B$,CRC(A$)).

CRC algorithm:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/crc_function.htm
@/
CRC(stringA,stringB,ERR:lineref): any


/@@

CTRL(chan,control_id,function,context_id,ERR=lineref)


#### Syntax
\`CTRL(chan,control_id,function,context_id,ERR=lineref)\`

#### Description
For BBj-specific information, see the CTRL() Function - BBj.

The CTRL() function reports on the status of selected items on a GUI device and returns a string value.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/ctrl_function.htm
@/
CTRL(chan,control_id,function,context_id,ERR:lineref): any


/@@

CVS(string,int,ERR=lineref)


#### Syntax
\`CVS(string,int,ERR=lineref)\`

#### Description
For BBj-specific information, see the CVS() Function - BBj.

The <span class="Inline_Code">CVS()</span> function modifies a given string by the value of int from the table below:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/cvs_function.htm
@/
CVS(string,int,ERR:lineref): any


/@@

CVT(unit_value,conversion_type,ERR=lineref)


#### Syntax
\`CVT(unit_value,conversion_type,ERR=lineref)\`

#### Description
For BBj-specific information, see CVT() Function - BBj.The following example converts horizontal pixels to horizontal semicharacters and vertical pixels to vertical semicharacters:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/cvt_function.htm
@/
CVT(unit_value,conversion_type,ERR:lineref): any


/@@

DATE(num1,num2:str,ERR=lineref)


#### Syntax
\`DATE(num1,num2:str,ERR=lineref)\`

#### Description
For BBj-specific information, see the DATE() Function - BBj.

The DATE() function takes a Julian date and the optional time-of-day and formats it into a more familiar calendar date and time string.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/date_function.htm
@/
DATE(num1,num2:str,ERR:lineref): any


/@@

DEC(string,ERR=lineref)


#### Syntax
\`DEC(string,ERR=lineref)\`

#### Description
The DEC() function converts a binary string argument into a numeric value. The string argument is treated as a signed binary integer.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/dec_function.htm
@/
DEC(string,ERR:lineref): any


/@@

DIMS(arrayname,ERR=lineref)


#### Syntax
\`DIMS(arrayname,ERR=lineref)\`

#### Description
For BBj-specific information, see the DIMS() Function - BBj.

The DIMS() function returns the dimensions of an array. The 25-character string that is returned may be addressed using the following template:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/dims_function.htm
@/
DIMS(arrayname,ERR:lineref): any


/@@

DIR(disk,ERR=lineref)


#### Syntax
\`DIR(disk,ERR=lineref)\`

#### Description
The DIR() function returns the default directory for the specified disk.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/dir_function.htm
@/
DIR(disk,ERR:lineref): any


/@@

DSK(disk,ERR=lineref)


#### Syntax
\`DSK(disk,ERR=lineref)\`

#### Description
The DSK() function determines the current default disk drive as well as which drives are configured.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/dsk_function.htm
@/
DSK(disk,ERR:lineref): any


/@@

EPT(num,ERR=lineref)


#### Syntax
\`EPT(num,ERR=lineref)\`

#### Description
The EPT() function returns the order of magnitude of num (the exponent of 10).

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/ept_function.htm
@/
EPT(num,ERR:lineref): any


/@@

ERRMES(int,str,ERR=lineref)


#### Syntax
\`ERRMES(int,str,ERR=lineref)\`

#### Description
For BBj-specific information, see the ERRMES() Function - BBj.

The ERRMES() function returns the error message associated with a given error code provided by the int parameter. The str parameter replaces the existing error message for the specified error number.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/errmes_function.htm
@/
ERRMES(int,str,ERR:lineref): any


/@@

FATTR(string,ERR=lineref)


#### Syntax
\`FATTR(string,ERR=lineref)\`

#### Description
The FATTR() function returns information about the specified string template. For additional information on string templates, see the String Template in the User's Reference Guide.A$ is a templated string and the following is its template definition:The FATTR() function can be used to determine the attributes for each field in a template. The attributes are returned in a string with the following format:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/fattr_function.htm
@/
FATTR(string,ERR:lineref): any


/@@

FBIN(numeric,ERR=lineref)


#### Syntax
\`FBIN(numeric,ERR=lineref)\`

#### Description
For BBj-specific information, see the FBIN() Function - BBj.

The FBIN() function returns an 8-byte string containing the equivalent of the numeric argument in IEEE standard, 64-bit, floating point format. This function is for outputting numeric information that may be read by other software packages, such as spreadsheet software.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/fbin_function.htm
@/
FBIN(numeric,ERR:lineref): any


/@@

FDEC(string,ERR=lineref)


#### Syntax
\`FDEC(string,ERR=lineref)\`

#### Description
For BBj-specific information, see the FDEC() Function - BBj.

The FDEC() function accepts an 8-byte floating point format and returns its decimal numeric equivalent.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/fdec_function.htm
@/
FDEC(string,ERR:lineref): any


/@@

FID(channelno,ERR=lineref)


#### Syntax
\`FID(channelno,ERR=lineref)\`

#### Description
For BBj-specific information, see FID() Function - BBj.

See also XFID() Function - Get File Identification.

The FID() function returns a string describing the attributes of the file currently OPENed on channelno. If channelno was OPENed with an alias and resulted in opening a PRO/5 device, FID() returns only the alias name and may be a string from one to six characters long.

Channel zero refers to the terminal device. Normally, the value returned by FID (0) is the terminal alias (T0, T1, etc.). However, if PRO/5 is running in background or with redirected standard I/O, the file name associated with channel 0 will be <font style="font-weight: bold;">IO, which has no special capabilities other than to read and write data.

If the channel was opened without an alias, then FID() returns a string with the following information:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/fid_function.htm
@/
FID(channelno,ERR:lineref): any


/@@

FILEOPT(str,ERR=lineref)


#### Syntax
\`FILEOPT(str,ERR=lineref)\`

#### Description
The FILEOPT() function returns the settings given in the FILEOPT verb.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/fileopt_function.htm
@/
FILEOPT(str,ERR:lineref): any


/@@

FILL(int,string,ERR=lineref)


#### Syntax
\`FILL(int,string,ERR=lineref)\`

#### Description
The FILL() function generates repeating strings on the fly without the need for a DIM statement.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/fill_function.htm
@/
FILL(int,string,ERR:lineref): any


/@@

FIN(channelno,ERR=lineref)


#### Syntax
\`FIN(channelno,ERR=lineref)\`

#### Description
For BBj-specific information, see FIN() Function - BBj.The FIN() data for nondevices always contains 64 bytes of reserved space, including the following information:The FIN for C-ISAM files is identical to the FIN for MKEYED files, with the following exceptions:The FIN for a printer or terminal contains the following information:The FIN() of a plot device contains the following information:With a SYSGUI channel and an IND=0 (or without specifying any IND= parameter), the FIN() function returns the information below. The template can be obtained with TMPL(chan,IND=0) on the same channel. With the TMPL() function, the IND=0 parameter is required to get a template for the FIN(). Otherwise, a template for the record data (SYSGUI event structure) is returned. Returned templates start at position 65.When the FIN() function is used on a channel that is opened to a SYSWINDOW device (such as the graphical console terminal window), it can be invoked with an IND= parameter to retrieve special information about the terminal window.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/fin_function.htm
@/
FIN(channelno,ERR:lineref): any


/@@

FNnumname(expr,...)


#### Syntax
\`FNnumname(expr,...)\`

#### Description
For BBj-specific information, see FNx() Function - BBj.

Used with the DEF verb, the FN() function executes functions defined by the user.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/fnx_function.htm
@/
FNnumname(expr): any


/@@

FPT(num,ERR=lineref)


#### Syntax
\`FPT(num,ERR=lineref)\`

#### Description
The FPT() function returns the fractional part of the numeric expression. The result has the same sign as the argument.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/fpt_function.htm
@/
FPT(num,ERR:lineref): any


/@@

GAP(string,ERR=lineref)


#### Syntax
\`GAP(string,ERR=lineref)\`

#### Description
The GAP() function returns its string argument with each byte in odd parity by complementing the high-order bit of any byte containing an even number of 1 bits. Note that even parity may be generated using:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/gap_function.htm
@/
GAP(string,ERR:lineref): any


/@@

HSA(disk,ERR=lineref)


#### Syntax
\`HSA(disk,ERR=lineref)\`

#### Description
The HSA() function returns an integer that identifies the highest sector addressable for a disk.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/hsa_function.htm
@/
HSA(disk,ERR:lineref): any


/@@

HSH(stringA,stringB,ERR=lineref)


#### Syntax
\`HSH(stringA,stringB,ERR=lineref)\`

#### Description
The HSH() function is similar to the CRC() function, except with a different algorithm (see the CRC() function).

HSH algorithm:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/hsh_function.htm
@/
HSH(stringA,stringB,ERR:lineref): any


/@@

HTA(string,ERR=lineref)


#### Syntax
\`HTA(string,ERR=lineref)\`

#### Description
The HTA() function converts a hexadecimal string to a human-readable ASCII string. The result is always twice the length of the argument.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/hta_function.htm
@/
HTA(string,ERR:lineref): any


/@@

IND(channelno,ERR=lineref,END=lineref)


#### Syntax
\`IND(channelno,ERR=lineref,END=lineref)\`

#### Description
The IND() function returns the pointer of the current record on channelno. For TCP/IP or UDP socket connections, it returns the socket number.

If the file pointer is at the end of the file, an !ERROR=2 is generated. Some file types do not return anything as the index.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/ind_function.htm
@/
IND(channelno,ERR:lineref,END:lineref): any


/@@

INFO(int,int,ERR=lineref)


#### Syntax
\`INFO(int,int,ERR=lineref)\`

#### Description
For BBj-specific information, see the INFO() Function - BBj.

The INFO() function returns system information strings.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/info_function.htm
@/
INFO(int,int,ERR:lineref): any


/@@

INT(num,ERR=lineref)


#### Syntax
\`INT(num,ERR=lineref)\`

#### Description
The INT() function converts a numeric argument, removing any fractional digits and truncating all digits to the right of the decimal point.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/int_function.htm
@/
INT(num,ERR:lineref): any


/@@

IOR(string,string,ERR=lineref)


#### Syntax
\`IOR(string,string,ERR=lineref)\`

#### Description
The IOR() function inclusive ORs the bits of the two string arguments and returns a string. Both string arguments must be the same length. The following rules describe the IOR() function:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/ior_function.htm
@/
IOR(string,string,ERR:lineref): any


/@@

JUL(year,month,day,ERR=lineref)


#### Syntax
\`JUL(year,month,day,ERR=lineref)\`

#### Description
For BBj-specific information, see JUL() Function - BBj.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/jul_function.htm
@/
JUL(year,month,day,ERR:lineref): any


/@@

KGEN(str1,str2,int,ERR=lineref)


#### Syntax
\`KGEN(str1,str2,int,ERR=lineref)\`

#### Description
The KGEN() function derives the value of a key contained within a record.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/kgen_function.htm
@/
KGEN(str1,str2,int,ERR:lineref): any


/@@

LEN(string,ERR=lineref)


#### Syntax
\`LEN(string,ERR=lineref)\`

#### Description
The LEN() function returns the length of string.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/len_function.htm
@/
LEN(string,ERR:lineref): any


/@@

LOG(num,precis,ERR=lineref)


#### Syntax
\`LOG(num,precis,ERR=lineref)\`

#### Description
The LOG() function returns the common logarithm (base 10) of its argument.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/log_function.htm
@/
LOG(num,precis,ERR:lineref): any


/@@

LRC(string,ERR=lineref)


#### Syntax
\`LRC(string,ERR=lineref)\`

#### Description
The LRC() function returns a 1-byte string that is the result of exclusive ORing of all the bytes of its argument string. See the XOR() function for a description of exclusive OR. A null argument returns a $00$.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/lrc_function.htm
@/
LRC(string,ERR:lineref): any


/@@

LST(stringA,stringB,ERR=lineref)


#### Syntax
\`LST(stringA,stringB,ERR=lineref)\`

#### Description
For BBj-specific information, see the LST() Function BBj.In the following example, CPL$ is a compiled BASIC statement that is converted into LIST format and placed in TEXT$.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/lst_function.htm
@/
LST(stringA,stringB,ERR:lineref): any


/@@

MASK(str1,str2,ERR=lineref)


#### Syntax
\`MASK(str1,str2,ERR=lineref)\`

#### Description
For BBj-specific information, see the MASK() Function - BBj.

The MASK() function scans a string for a matching substring. This differs from the POS() function because str2 may contain pattern matching specifications similar to the UNIX operating system "grep" command.The following displays all file names matching a particular pattern:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands/mask_function.htm
@/
MASK(str1,str2,ERR:lineref): any


/@@

MAX(num,num...)


#### Syntax
\`MAX(num,num...)\`

#### Description
The MAX() function takes any number of numeric arguments and returns the value of the greatest argument.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/max_function.htm
@/
MAX(num,num): any


/@@

MENUINFO(sysgui,contextid,ERR=lineref,END=lineref)


#### Syntax
\`MENUINFO(sysgui,contextid,ERR=lineref,END=lineref)\`

#### Description
The MENUINFO() function retrieves a string that contains the structure of a menu.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/menuinfo_function.htm
@/
MENUINFO(sysgui,contextid,ERR:lineref,END:lineref): any


/@@

MIN(num,num...)


#### Syntax
\`MIN(num,num...)\`

#### Description
The MIN() function takes any number of numeric arguments and returns the value of the least argument.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/min_function.htm
@/
MIN(num,num): any


/@@

MOD(numA,numB,ERR=lineref)


#### Syntax
\`MOD(numA,numB,ERR=lineref)\`

#### Description
The MOD() function returns the modulo (remainder) result using the following rules:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/mod_function.htm
@/
MOD(numA,numB,ERR:lineref): any


/@@

MSGBOX(str1,expr,str2,ERR=lineref)


#### Syntax
\`MSGBOX(str1,expr,str2,ERR=lineref)\`

#### Description
For BBj-specific information, see the MSGBOX() Function - BBj.

The MSGBOX() function creates a message dialog box and returns a value that identifies the user-selected button.The value returned by MSGBOX() identifies which button the user selects, as follows:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/msgbox_function.htm
@/
MSGBOX(str1,expr,str2,ERR:lineref): any


/@@

NEVAL(str,ERR=lineref)


#### Syntax
\`NEVAL(str,ERR=lineref)\`

#### Description
For BBj-specific information, see the NEVAL() Function - BBj.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/neval_function.htm
@/
NEVAL(str,ERR:lineref): any


/@@

NOT(string,ERR=lineref)


#### Syntax
\`NOT(string,ERR=lineref)\`

#### Description
The NOT() function toggles the bits of its string argument and returns the result.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/not_function.htm
@/
NOT(string,ERR:lineref): any


/@@

NOTICE(sysgui,nfyid,ERR=lineref)


#### Syntax
\`NOTICE(sysgui,nfyid,ERR=lineref)\`

#### Description
The NOTICE() function uses the passed Notify ID and retrieves the Notice string from the SYSGUI channel.The following example shows the basic structure of an event loop in a Visual PRO/5 program, including details on how to interpret arbitrary Notify events:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/notice_function.htm
@/
NOTICE(sysgui,nfyid,ERR:lineref): any


/@@

NOTICETPL(objtype,code,ERR=lineref)


#### Syntax
\`NOTICETPL(objtype,code,ERR=lineref)\`

#### Description
For BBj-specific information, see NOTICETPL() Function - BBj.This example shows the basic structure of an event loop in a Visual PRO/5 program, including details on how to interpret arbitrary Notify events.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/noticetpl_function.htm
@/
NOTICETPL(objtype,code,ERR:lineref): any


/@@

NUM(string,ERR=lineref)


#### Syntax
\`NUM(string,ERR=lineref)\`

#### Description
For BBj-specific information, see NUM() Function - BBj.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/num_function.htm
@/
NUM(string,ERR:lineref): any


/@@

PAD(str,len,padtype,padchr,ERR=lineref)


#### Syntax
\`PAD(str,len,padtype,padchr,ERR=lineref)\`

#### Description
The PAD() function pads a specified string.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/pad_function.htm
@/
PAD(str,len,padtype,padchr,ERR:lineref): any


/@@

PCK(num1,num2,ERR=lineref)


#### Syntax
\`PCK(num1,num2,ERR=lineref)\`

#### Description
The PCK() function (and the counterpart function UPK()) has been added for compatibility with older Business BASICs that support these nonstandard capabilities. In the syntax example above, num1 is any numeric expression, and num2 is an integer from 1 to 6. The string result is num2 bytes long. The packed string may hold two digits per byte; therefore, a 6-byte packed string may hold a 12-digit number (including a sign). If num1 has any fractional digits, they are ignored. If the value is too large for the size of the packed result, excess digits on the left are discarded.

The intent of PCK() and UPK() is to allow compression of numeric values into a pseudo-binary form to save disk space. Because the BIN() and CHR() functions generate bytes that could be mistaken for field terminators (by the READ statement), another method was needed.

PCK() and UPK() are designed so that the packed strings do not contain field terminators. To be consistent with other implementations of PCK()/UPK(), the packed string for negative values will compare greater than a packed string for positive values. Also, a packed string for -2 will compare greater than a packed string for -1, though, numerically, -1 is greater than -2. PRO/5 does not necessarily use the same packed format as other BASICs; therefore, when converting existing data files to PRO/5, packed fields must be unpacked and then repacked under PRO/5.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/pck_function.htm
@/
PCK(num1,num2,ERR:lineref): any


/@@

PGM(int,ERR=lineref)


#### Syntax
\`PGM(int,ERR=lineref)\`

#### Description
For BBj-specific information, see the PGM() Function - BBj.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/pgm_function.htm
@/
PGM(int,ERR:lineref): any


/@@

POS(stringA relation stringB ,intA,intB)


#### Syntax
\`POS(stringA relation stringB ,intA,intB)\`

#### Description
The POS() function scans stringB for a substring with a specific relationship to stringA.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/pos_function.htm
@/
POS(expression): any


/@@

PUB(int,ERR=lineref)


#### Syntax
\`PUB(int,ERR=lineref)\`

#### Description
For BBj-specific information, see the PUB() Function.

The PUB() function returns strings describing the public programs currently in memory.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/pub_function.htm
@/
PUB(int,ERR:lineref): any


/@@

RESFIRST(res_handle,ERR=lineref)


#### Syntax
\`RESFIRST(res_handle,ERR=lineref)\`

#### Description
The RESFIRST() function retrieves the resource identifier and creates a string that provides resource ID information.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/resfirst_function.htm
@/
RESFIRST(res_handle,ERR:lineref): any


/@@

RESGET(handle,group,item,ERR=lineref)


#### Syntax
\`RESGET(handle,group,item,ERR=lineref)\`

#### Description
For BBj-specific information, see the RESGET() Function - BBj.

RESGET() returns a resource string from a BASIS resource file.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/resget_function.htm
@/
RESGET(handle,group,item,ERR:lineref): any


/@@

RESINFO(res_handle,resource,ERR=lineref)


#### Syntax
\`RESINFO(res_handle,resource,ERR=lineref)\`

#### Description
For BBj-specific information, see RESINFO() Function - BBj.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/resinfo_function.htm
@/
RESINFO(res_handle,resource,ERR:lineref): any


/@@

RESNEXT(res_handle,res_id,ERR=lineref)


#### Syntax
\`RESNEXT(res_handle,res_id,ERR=lineref)\`

#### Description
The RESNEXT() function returns a string assigning the next valid resource in the resource file to the template defined by RESFIRST().

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/resnext_function.htm
@/
RESNEXT(res_handle,res_id,ERR:lineref): any


/@@

RESOPEN(filename,ERR=lineref)


#### Syntax
\`RESOPEN(filename,ERR=lineref)\`

#### Description
For BBj-specific information, see the RESOPEN() Function - BBj.

The RESOPEN() function opens a resource file and returns an integer handle.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/resopen_function.htm
@/
RESOPEN(filename,ERR:lineref): any


/@@

RND(int,ERR=lineref)


#### Syntax
\`RND(int,ERR=lineref)\`

#### Description
The RND() function returns a sequence of random numbers. The sequence of values returned is determined by a "seed value." The same sequence results each time a given seed is used.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/rnd_function.htm
@/
RND(int,ERR:lineref): any


/@@

ROUND(expr,int,ERR=lineref)


#### Syntax
\`ROUND(expr,int,ERR=lineref)\`

#### Description
The ROUND() function rounds a number to a specified number of decimal places or to the current precision value.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/round_function.htm
@/
ROUND(expr,int,ERR:lineref): any


/@@

SCALL(string,ERR=lineref)


#### Syntax
\`SCALL(string,ERR=lineref)\`

#### Description
For BBj-specific information, see SCALL() Function - BBj.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/scall_function.htm
@/
SCALL(string,ERR:lineref): any


/@@

SENDMSG(sysgui,id,function,int,string,context,ERR=lineref)


#### Syntax
\`SENDMSG(sysgui,id,function,int,string,context,ERR=lineref)\`

#### Description
The SENDMSG() function sends messages to windows and controls. The meaning of the returned string depends on the type of object the id parameter refers to and the message being sent.

While the SENDMSG() functions contained in this section apply to windows and child windows, there are SENDMSG()functions that apply specifically to grid , INPUTE, INPUTN, and tab controls, as well as those that apply specifically to setting international keyboards. The following identifies the parameters common to all SENDMSG() functions:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/sendmsg_function.htm
@/
SENDMSG(sysgui,id,function,int,string,context,ERR:lineref): any


/@@

SEVAL(str,ERR=lineref)


#### Syntax
\`SEVAL(str,ERR=lineref)\`

#### Description
The SEVAL() function is intended to replace the use of EXECUTE for evaluating string expressions in public programs. SEVAL() returns the value from the string expression in str after compiling and executing the str. Error branches in str are not taken in the event of an error while evaluating the expression.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/seval_function.htm
@/
SEVAL(str,ERR:lineref): any


/@@

SGN(num,ERR=lineref)


#### Syntax
\`SGN(num,ERR=lineref)\`

#### Description
The SGN() function returns a 1, 0, or -1 depending on whether its numeric argument is positive, zero, or negative respectively.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/sgn_function.htm
@/
SGN(num,ERR:lineref): any


/@@

SIN(num,precis,ERR=lineref)


#### Syntax
\`SIN(num,precis,ERR=lineref)\`

#### Description
The SIN() function returns the sine of an argument.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/sin_function.htm
@/
SIN(num,precis,ERR:lineref): any


/@@

SQLERR(sqlchan,ERR=lineref)


#### Syntax
\`SQLERR(sqlchan,ERR=lineref)\`

#### Description
The SQLERR() function returns the text for the most recent error returned by the SQL command being executed. This text is not normally generated by PRO/5 and may not be compatible with different SQL databases.

If an SQLOPEN fails, use SQLERR(0) to return the error code of the failed open.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/sqlerr_function.htm
@/
SQLERR(sqlchan,ERR:lineref): any


/@@

SQLFETCH(sqlchan,IND=1,END=lineref,ERR=lineref)


#### Syntax
\`SQLFETCH(sqlchan,IND=1,END=lineref,ERR=lineref)\`

#### Description
The SQLFETCH() function returns the next element in the result set from the execution of the SQL command on sqlchan. If no results remain, an !ERROR=2 is returned. Other errors require using SQLERR to diagnose.

Use the optional IND=1 parameter to return the number of records modified by an update or delete.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/sqlfetch_function.htm
@/
SQLFETCH(sqlchan,IND,END:lineref,ERR:lineref): any


/@@

SQLLIST(arg,ERR=lineref)


#### Syntax
\`SQLLIST(arg,ERR=lineref)\`

#### Description
For BBj-specific information, see SQLTMPL() Function - BBj.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/sqllist_function.htm
@/
SQLLIST(arg,ERR:lineref): any


/@@

SQLTABLES(sqlchan,ERR=lineref)


#### Syntax
\`SQLTABLES(sqlchan,ERR=lineref)\`

#### Description
The SQLTABLES() function retrieves a list of available tables from a database with each item terminated by a linefeed.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/sqltables_function.htm
@/
SQLTABLES(sqlchan,ERR:lineref): any


/@@

SQLTMPL(sqlchan,IND=1,ERR=lineref)


#### Syntax
\`SQLTMPL(sqlchan,IND=1,ERR=lineref)\`

#### Description
For BBj-specific information, see the SQLTMPL() Function - BBj.

The SQLTMPL() function returns the template used to access the data returned in an SQLFETCH() operation. The template returned is dependent on the SQL command given by the SQLPREP verb. Therefore, the template returned may vary if different tables are accessed with the SQLPREP verb.

The optional IND=1 parameter returns the number of rows that have been modified with the SQL DELETE or UPDATE command and should not be used with queries.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/sqltmpl_function.htm
@/
SQLTMPL(sqlchan,IND,ERR:lineref): any


/@@

SQR(num,ERR=lineref)


#### Syntax
\`SQR(num,ERR=lineref)\`

#### Description
The SQR() function returns the square root of its numeric argument. The argument may be any positive number.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/sqr_function.htm
@/
SQR(num,ERR:lineref): any


/@@

SSORT(str1,int1,str2,int2,ERR=lineref)


#### Syntax
\`SSORT(str1,int1,str2,int2,ERR=lineref)\`

#### Description
The SSORT() function sorts str1 using int1 as the record size and optionally using the key described using str2 and int2 as a key descriptor pair. The key descriptor has the length of the key to sort. See the KGEN() function for additional information. The string returned by this function is str1, sorted.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/ssort_function.htm
@/
SSORT(str1,int1,str2,int2,ERR:lineref): any


/@@

SSZ(string,ERR=lineref)


#### Syntax
\`SSZ(string,ERR=lineref)\`

#### Description
The SSZ() function returns the constant 512 and is included only for syntax compatibility with older versions of Business BASIC. string or int must refer to a valid disk drive.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/ssz_function.htm
@/
SSZ(string,ERR:lineref): any


/@@

STBL(str1,str2,ERR=lineref)


#### Syntax
\`STBL(str1,str2,ERR=lineref)\`

#### Description
The STBL() function allows the program to maintain strings that are independent of the workspace and cannot be destroyed by CLEAR, BEGIN, or START. However, these strings are not shared between tasks. The STBL() function is used to maintain these global strings. There are two forms of the STBL() function:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/stbl_function.htm
@/
STBL(str1,str2,ERR:lineref): any


/@@

STR(num:mask,ERR=lineref)


#### Syntax
\`STR(num:mask,ERR=lineref)\`

#### Description
For BBj-specific information, see STR() Function - BBj.

The first STR() function above returns an ASCII string representing the value of its numeric argument. The result can be formatted using the optional string mask. See Numeric Output for more information.

The NUM() function is complementary to the STR() function when the STR() function is used without a mask that places nonnumeric characters in the result.

In the second syntax example above, the STR() function returns its string argument applied to the specified mask. The specified positions in the mask are filled with successive characters from string. The following characters in mask are replaced by characters from string:

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/str_function.htm
@/
STR(num:mask,ERR:lineref): any


/@@

SWAP(str1,str2,ERR=lineref)


#### Syntax
\`SWAP(str1,str2,ERR=lineref)\`

#### Description
The SWAP() function is used for exchanging data with other software applications that may be using a native mode of data representation on a particular machine. It rearranges the bytes in str1 according to specific rules and returns the string result. The rules are provided by individual bits in the optional str2, or by default if str2 is not given. str2 must be one byte long. The lower three bits determine the kind of swapping to take place.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/swap_function.htm
@/
SWAP(str1,str2,ERR:lineref): any


/@@

TBL(string,string,ERR=lineref)


#### Syntax
\`TBL(string,string,ERR=lineref)\`

#### Description
The TBL() function performs the string translation described in the TABLE verb. The first argument is the string to translate. The second argument, which specifies the translation table, may be either another string or a TBL=lineref reference. If the table is in a string, the string must be at least one byte long. If TBL= is used, it must refer to a TABLE statement.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/tbl_function.htm
@/
TBL(string,string,ERR:lineref): any


/@@

TCB(int,ERR=lineref)


#### Syntax
\`TCB(int,ERR=lineref)\`

#### Description
For BBj-specific information, see the TCB() Function - BBj.

The TCB() function returns information on the current state of the application.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/tcb_function.htm
@/
TCB(int,ERR:lineref): any


/@@

SQLTMPL(sqlchan,IND=1,ERR=lineref)


#### Syntax
\`SQLTMPL(sqlchan,IND=1,ERR=lineref)\`

#### Description
For BBj-specific information, see the SQLTMPL() Function - BBj.

The SQLTMPL() function returns the template used to access the data returned in an SQLFETCH() operation. The template returned is dependent on the SQL command given by the SQLPREP verb. Therefore, the template returned may vary if different tables are accessed with the SQLPREP verb.

The optional IND=1 parameter returns the number of rows that have been modified with the SQL DELETE or UPDATE command and should not be used with queries.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/sqltmpl_function.htm
@/
SQLTMPL(sqlchan,IND,ERR:lineref): any


/@@

TSK(int,ERR=lineref)


#### Syntax
\`TSK(int,ERR=lineref)\`

#### Description
For BBj-specific information, see TSK() Function - BBj.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/tsk_function.htm
@/
TSK(int,ERR:lineref): any


/@@

UPK(str,ERR=lineref)


#### Syntax
\`UPK(str,ERR=lineref)\`

#### Description
The UPK() function returns a numeric result from the packed data in str. It is assumed that str was created by the PCK() function. See the PCK() function for additional information.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/upk_function.htm
@/
UPK(str,ERR:lineref): any


/@@

WINFIRST(sysgui,ERR=lineref)


#### Syntax
\`WINFIRST(sysgui,ERR=lineref)\`

#### Description
The WINFIRST() function returns a window context ID that can be used by the WININFO() function to obtain information about the referenced window. To query the current window context for a given SYSGUI channel, use either the CTRL() function or the FIN() function.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/winfirst_function.htm
@/
WINFIRST(sysgui,ERR:lineref): any


/@@

WININFO(sysgui,contextid,ERR=lineref,END=lineref)


#### Syntax
\`WININFO(sysgui,contextid,ERR=lineref,END=lineref)\`

#### Description
The WININFO() function returns a string that contains information about the contents of a SYSGUI window.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/wininfo_function.htm
@/
WININFO(sysgui,contextid,ERR:lineref,END:lineref): any


/@@

WINNEXT(sysgui,context,ERR=lineref)


#### Syntax
\`WINNEXT(sysgui,context,ERR=lineref)\`

#### Description
The WINNEXT() function returns the next context ID of each of the top-level windows in sequence by way of a templated string obtained either from the WINFIRST() function or from a previous use of the WINNEXT() function.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/winnext_function.htm
@/
WINNEXT(sysgui,context,ERR:lineref): any


/@@

XKGEN(str1,str2,int,ERR=lineref)


#### Syntax
\`XKGEN(str1,str2,int,ERR=lineref)\`

#### Description
In BBj 3.0 and higher, the XKGEN() function derives the value of a key contained within a record.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/xkgen_function.htm
@/
XKGEN(str1,str2,int,ERR:lineref): any


/@@

XOR(stringA,stringB,ERR=lineref)


#### Syntax
\`XOR(stringA,stringB,ERR=lineref)\`

#### Description
The XOR() function will exclusive OR the bits of the two string arguments and return the result. The two strings must be the same length. The rules for XOR() are:LET Z$=XOR($94$,$AC$)

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/xor_function.htm
@/
XOR(stringA,stringB,ERR:lineref): any


/@@

XSSORT(str1,int1,str2,int2,ERR=lineref)


#### Syntax
\`XSSORT(str1,int1,str2,int2,ERR=lineref)\`

#### Description
In BBj 3.0 and higher, the XSSORT() function sorts str1 using int1 as the record size and optionally using the key described using str2 and int2 as a key descriptor pair. The key descriptor has the length of the key to sort. The string returned by this function is str1, sorted.

See XKGEN() Function for additional information.

Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands2/xssort_function.htm
@/
XSSORT(str1,int1,str2,int2,ERR:lineref): any


`.trimLeft();
