/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	// Input samples contain data that not corresponds to the task description.
	// E. g. some Spichonees loves themselves, and some Spichonees loves nobody.
	// I believe the correct decision is to hadle susch input data in a special way
	// (e.g. break with a warning that data is incorrect).
	// Please comment at a webinar or directly.
	 let counter = 0;
        for(let i = 0; i < preferences.length; i++){
            let s1 = i+1;
            let s2 = preferences[ s1 - 1 ];
            let s3 = preferences[ s2 - 1 ];
            let s4 = preferences[ s3 - 1 ];

        if( s4===s1 && s2 !==s3 ) counter ++;
        };

        return counter/3;

};