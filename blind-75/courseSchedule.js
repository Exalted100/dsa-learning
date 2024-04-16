// https://leetcode.com/problems/course-schedule/description/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prerequisitesMapping = {};

    for (let i = 0; i < prerequisites.length; i++) {
        if ((prerequisitesMapping[prerequisites[i][0]] && prerequisitesMapping[prerequisites[i][0]].includes(prerequisites[i][1])) || prerequisites[i][0] === prerequisites[i][1]) {
            return false;
        }
        
        prerequisitesMapping[prerequisites[i][1]] = prerequisitesMapping[prerequisites[i][1]] ? [...prerequisitesMapping[prerequisites[i][1]], prerequisites[i][0]] : [prerequisites[i][0]];
        const temp = Object.keys(object1).filter(item => item.includes[prerequisites[i][0]]);
        for (let e = 0; e < temp.length; e++) {
            prerequisitesMapping
        }
    }

    return true;
};

console.log(canFinish(2, [[1,0]]))
console.log(canFinish(2, [[1,0],[0,1]]))
console.log(canFinish(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]))
console.log(canFinish(1, []))
console.log(canFinish(3, [[0,2],[1,2],[2,0]]))