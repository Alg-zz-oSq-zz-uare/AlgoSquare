	function initGrid () {
		var z = 0;
		var w = 0;
		while(z < 10)
		{
			grid[z] = new Array();
			while(w < 10)
			{
				if((z < 4) && (z % 2 == 0 && w % 2 != 0))
					grid[z][w] = 2;
				else if((z < 4) && (z % 2 != 0 && w % 2 == 0))
					grid[z][w] = 2;
				else if((z > 5) && (z % 2 != 0 && w % 2 == 0))
					grid[z][w] = 1;
				else if((z > 5) && (z % 2 == 0 && w % 2 != 0))
					grid[z][w] = 1;
				else
					grid[z][w] = 0;
				w++;
			}
			w = 0;
			z++;
		}
		z = 0;
		w = 0;
	}

	function getCoord(id, axe) {
		if((axe == 'y' && id[0] == 'A') || (axe == 'x' && id[1] == '1' && id.length == 2))
			return 0;
		if((axe == 'y' && id[0] == 'B') || (axe == 'x' && id[1] == '2'))
			return 1;
		if((axe == 'y' && id[0] == 'C') || (axe == 'x' && id[1] == '3'))
			return 2;
		if((axe == 'y' && id[0] == 'D') || (axe == 'x' && id[1] == '4'))
			return 3;
		if((axe == 'y' && id[0] == 'E') || (axe == 'x' && id[1] == '5'))
			return 4;
		if((axe == 'y' && id[0] == 'F') || (axe == 'x' && id[1] == '6'))
			return 5;
		if((axe == 'y' && id[0] == 'G') || (axe == 'x' && id[1] == '7'))
			return 6;
		if((axe == 'y' && id[0] == 'H') || (axe == 'x' && id[1] == '8'))
			return 7;
		if((axe == 'y' && id[0] == 'I') || (axe == 'x' && id[1] == '9'))
			return 8;
		if((axe == 'y' && id[0] == 'J') || (axe == 'x' && id[1] == '1' && id[2] == '0'))
			return 9;
	}
	function putCoord(value, axe) {
		if(axe == 'y')
		{
			if(value == 0)
				return 'A';
			if(value == 1)
				return 'B';
			if(value == 2)
				return 'C';
			if(value == 3)
				return 'D';
			if(value == 4)
				return 'E';
			if(value == 5)
				return 'F';
			if(value == 6)
				return 'G';
			if(value == 7)
				return 'H';
			if(value == 8)
				return 'I';
			if(value == 9)
				return 'J';
		}
		if(axe == 'x')
		{
			if(value == 0)
				return '1';
			if(value == 1)
				return '2';
			if(value == 2)
				return '3';
			if(value == 3)
				return '4';
			if(value == 4)
				return '5';
			if(value == 5)
				return '6';
			if(value == 6)
				return '7';
			if(value == 7)
				return '8';
			if(value == 8)
				return '9';
			if(value == 9)
				return '10';
		}
	}