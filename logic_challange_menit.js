function KonversiMenit(menit){
	var h = Math.floor(menit / 60);
	var mm = (menit % 60).toString().length === 1 ? '0' + Math.floor(menit % 60) : Math.floor(menit % 60);

	return h + ':' + mm;
}

//
console.log(KonversiMenit(63));// 1:03
console.log(KonversiMenit(124));// 2:04
console.log(KonversiMenit(53));// 0:53
console.log(KonversiMenit(88));// 1:28
console.log(KonversiMenit(120));// 2:00