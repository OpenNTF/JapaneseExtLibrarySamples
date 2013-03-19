function isSmartphone()
{
	var uAgent = context.getUserAgent().getUserAgent();
	if ((uAgent.match("Android") !== null && uAgent.match("Mobile") !== null)||(uAgent.match("iPhone") !== null)||(uAgent.match("iPod") !== null))
		{
			
			return true;
		}	
		else
		{
			
			return false;
		}
}
