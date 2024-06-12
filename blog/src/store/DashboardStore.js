import {defineStore} from "pinia";


export let dashboardStore = defineStore('dashboardStore', {
    state: () => {
        return {
            dataDisplayArr: [
                {
                    name: '文章',
                    count: 6123,
                    svg: '<svg t="1718076530500" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10038" width="80" height="80"><path d="M857.4272 644.2944a32.0384 32.0384 0 0 0 32.1344-31.9424V318.912l-9.6768-9.3952c-23.0016-22.336-65.0304-64.4352-109.5296-109.0048-50.4832-50.56-102.688-102.848-128.448-127.5648L632.5696 64H275.84A141.184 141.184 0 0 0 134.4 204.5888v614.816A141.1904 141.1904 0 0 0 275.84 960h472.32a141.184 141.184 0 0 0 141.44-140.608v-34.56a32.1344 32.1344 0 0 0-64.2624 0v34.56a77.0368 77.0368 0 0 1-77.1776 76.7296H275.84a77.0304 77.0304 0 0 1-77.1712-76.7168V204.5888A77.0304 77.0304 0 0 1 275.84 127.872h296.1344v175.68a68.4416 68.4416 0 0 0 68.5696 68.16h184.7552v240.64a32.0384 32.0384 0 0 0 32.128 31.9424zM636.2432 303.552V157.1328c25.6768 25.4592 57.408 57.2416 88.5056 88.384 22.0544 22.0928 43.4112 43.4816 62.2912 62.304h-146.496a4.2944 4.2944 0 0 1-4.3008-4.2688z" fill="#FB3F50" p-id="10039"></path><path d="M497.6064 517.9648H320.2816a31.8144 31.8144 0 1 1 0-63.6224h177.3248a31.8144 31.8144 0 1 1 0 63.6224z m174.08 141.024H320.2816a31.8144 31.8144 0 1 1 0-63.616h351.424a31.8144 31.8144 0 1 1 0 63.616z m0 141.0304H320.2816a31.8144 31.8144 0 1 1 0-63.6224h351.424a31.8144 31.8144 0 1 1 0 63.6032z" fill="#FFCA1E" p-id="10040"></path></svg>',

                },
                {
                    name: '分类',
                    count: 123,
                    svg: '<svg t="1718090105077" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9563" width="80" height="80"><path d="M349.7472 448.1024H265.472c-48.3328 0-87.552-39.2192-87.552-87.552V276.2752c0-48.3328 39.2192-87.552 87.552-87.552h84.2752c48.3328 0 87.552 39.2192 87.552 87.552v84.2752c0 48.384-39.168 87.552-87.552 87.552zM802.6624 448.1024H718.336c-48.3328 0-87.552-39.2192-87.552-87.552V276.2752c0-48.3328 39.2192-87.552 87.552-87.552h84.2752c48.3328 0 87.552 39.2192 87.552 87.552v84.2752c0.0512 48.384-39.168 87.552-87.5008 87.552zM349.7472 892.16H263.5264c-48.3328 0-87.552-39.2192-87.552-87.552v-86.2208c0-48.3328 39.2192-87.552 87.552-87.552h86.2208c48.3328 0 87.552 39.2192 87.552 87.552v86.2208c0 48.384-39.168 87.552-87.552 87.552z" fill="#FD973F" p-id="9564"></path><path d="M802.6624 892.16h-86.6304c-48.3328 0-87.552-39.2192-87.552-87.552v-86.6304c0-48.3328 39.2192-87.552 87.552-87.552h86.6304c48.3328 0 87.552 39.2192 87.552 87.552v86.6304c0 48.384-39.2192 87.552-87.552 87.552z" fill="#FFF7E6" p-id="9565"></path><path d="M342.9376 478.7712h-125.44c-70.6048 0-128-57.3952-128-128v-125.44c0-70.6048 57.3952-128 128-128h125.44c52.736 0 99.4304 31.6416 118.9376 80.64a25.6512 25.6512 0 0 1-14.2848 33.28 25.6512 25.6512 0 0 1-33.28-14.2848c-11.7248-29.3888-39.7312-48.384-71.3728-48.384h-125.44c-42.3424 0-76.8 34.4576-76.8 76.8v125.44c0 42.3424 34.4576 76.8 76.8 76.8h125.44c42.3424 0 76.8-34.4576 76.8-76.8v-84.48c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6v84.48c0 70.5536-57.3952 127.9488-128 127.9488zM795.904 478.7712h-125.44c-70.6048 0-128-57.3952-128-128v-125.44c0-70.6048 57.3952-128 128-128h125.44c70.6048 0 128 57.3952 128 128v125.44c0 70.6048-57.3952 128-128 128z m-125.3888-330.1888c-42.3424 0-76.8 34.4576-76.8 76.8v125.44c0 42.3424 34.4576 76.8 76.8 76.8h125.44c42.3424 0 76.8-34.4576 76.8-76.8v-125.44c0-42.3424-34.4576-76.8-76.8-76.8h-125.44zM342.9376 923.904h-125.44c-70.6048 0-128-57.3952-128-128v-125.44c0-70.6048 57.3952-128 128-128h125.44c70.6048 0 128 57.3952 128 128v125.44c0 70.6048-57.3952 128-128 128z m-125.44-330.1888c-42.3424 0-76.8 34.4576-76.8 76.8v125.44c0 42.3424 34.4576 76.8 76.8 76.8h125.44c42.3424 0 76.8-34.4576 76.8-76.8v-125.44c0-42.3424-34.4576-76.8-76.8-76.8h-125.44zM795.904 923.904h-125.44c-70.6048 0-128-57.3952-128-128v-79.36c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6v79.36c0 42.3424 34.4576 76.8 76.8 76.8h125.44c42.3424 0 76.8-34.4576 76.8-76.8v-125.44c0-42.3424-34.4576-76.8-76.8-76.8h-125.44c-32.2048 0-61.2352 20.3264-72.2432 50.5856a25.61536 25.61536 0 0 1-32.8192 15.36 25.61536 25.61536 0 0 1-15.36-32.8192c18.3296-50.432 66.6624-84.3264 120.3712-84.3264h125.44c70.6048 0 128 57.3952 128 128v125.44c0.0512 70.6048-57.344 128-127.9488 128z" fill="#44454A" p-id="9566"></path></svg>'
                },
                {
                    name: '标签',
                    count: 321,
                    svg: '<svg t="1718090466731" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31498" width="80" height="80"><path d="M80 208v251a128 128 0 0 0 37.49 90.51l352 352a128 128 0 0 0 181 0l251-251a128 128 0 0 0 0-181l-352-352A128 128 0 0 0 459 80H208A128 128 0 0 0 80 208z" fill="#FFFFFF" p-id="31499"></path><path d="M128 240v193.61a112 112 0 0 0 32.8 79.19l352 352a112 112 0 0 0 158.4 0l195-195a112 112 0 0 0 1.38-157L529 162.21A112 112 0 0 0 448.45 128H240a112 112 0 0 0-112 112z" fill="#F28DF2" p-id="31500"></path><path d="M560 955a143 143 0 0 1-101.82-42.2l-352-352A143 143 0 0 1 64 459V208c0-79.4 64.6-144 144-144h251a143 143 0 0 1 101.8 42.18l352 352a144 144 0 0 1 0 203.64l-251 251A143.05 143.05 0 0 1 560 955zM208 96A112.12 112.12 0 0 0 96 208v251a111.29 111.29 0 0 0 32.8 79.2l352 352a112 112 0 0 0 158.4 0l251-251a112 112 0 0 0 0-158.4l-352-352A111.29 111.29 0 0 0 459 96z" fill="#333333" p-id="31501"></path><path d="M360 360m-104 0a104 104 0 1 0 208 0 104 104 0 1 0-208 0Z" fill="#FFFFFF" p-id="31502"></path><path d="M376 376m-72 0a72 72 0 1 0 144 0 72 72 0 1 0-144 0Z" fill="#82DAFA" p-id="31503"></path><path d="M360 480a120 120 0 1 1 120-120 120.13 120.13 0 0 1-120 120z m0-208a88 88 0 1 0 88 88 88.1 88.1 0 0 0-88-88zM608 736a32 32 0 0 1-22.63-54.63l96-96a32 32 0 0 1 45.26 45.26l-96 96A31.9 31.9 0 0 1 608 736z" fill="#333333" p-id="31504"></path></svg>'
                },
                {
                    name: '图片',
                    count: 1111,
                    svg: '<svg t="1718090583729" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41009" width="80" height="80"><path d="M903.4752 115.0976a12.9024 12.9024 0 0 0-17.0496-6.5024l-8.6528 3.84-3.84-8.6528a12.9024 12.9024 0 1 0-23.552 10.5472l3.84 8.6528-8.6528 3.84a12.9024 12.9024 0 1 0 10.5472 23.552l8.6528-3.84 3.84 8.6528a12.8768 12.8768 0 0 0 17.0496 6.5024 12.9024 12.9024 0 0 0 6.5024-17.0496l-3.84-8.6528 8.6528-3.84a12.9024 12.9024 0 0 0 6.5024-17.0496z" fill="#E2E5F1" p-id="41010"></path><path d="M161.6896 907.9296m-33.3312 0a33.3312 33.3312 0 1 0 66.6624 0 33.3312 33.3312 0 1 0-66.6624 0Z" fill="#E2E5F1" p-id="41011"></path><path d="M926.2592 871.3216l-123.2384-115.3536a20.46976 20.46976 0 0 0-27.9552 29.9008l123.2384 115.3536c3.9424 3.6864 8.96 5.5296 13.9776 5.5296 5.4784 0 10.9056-2.2016 14.9504-6.5024a20.51584 20.51584 0 0 0-0.9728-28.928z" fill="#E2E5F1" p-id="41012"></path><path d="M162.8672 160.4608m-33.3312 0a33.3312 33.3312 0 1 0 66.6624 0 33.3312 33.3312 0 1 0-66.6624 0Z" fill="#FAC573" p-id="41013"></path><path d="M795.6992 852.4288H243.6096c-69.12 0-125.1328-56.0128-125.1328-125.1328V295.936c0-69.12 56.0128-125.1328 125.1328-125.1328h552.0896c69.12 0 125.1328 56.0128 125.1328 125.1328v431.3088c0 69.12-56.0128 125.184-125.1328 125.184z" fill="#E2D3FE" p-id="41014"></path><path d="M767.8464 173.8752s88.4224 24.2688 92.7232 119.1936-2.1504 547.84-2.1504 547.84 60.416-5.376 61.4912-175.7696c1.0752-170.3936-1.3824-318.5152 0.9216-374.9376s-42.9568-119.04-152.9856-116.3264z" fill="#BDA5F9" p-id="41015"></path><path d="M307.8144 586.0864l-189.2352 151.6544c2.4576 63.744 54.8864 114.688 119.2448 114.688h486.0416L408.4224 587.264a79.32928 79.32928 0 0 0-100.608-1.1776z" fill="#FFC5E7" p-id="41016"></path><path d="M320.8192 584.2432l252.3648 212.992H245.3504c-65.2288 0-116.992-22.1184-129.4336-60.416-1.6384 44.7488 34.5088 113.2544 149.3504 113.2544h457.8304l-338.1248-277.7088-64.1536 11.8784z" fill="#FF99DD" p-id="41017"></path><path d="M690.2272 438.7328l-235.3152 187.5968 269.0048 226.0992h77.6192c65.8944 0 119.3472-53.4528 119.3472-119.3472v-185.9584l-130.9184-107.6224a79.16032 79.16032 0 0 0-99.7376-0.768z" fill="#9E80E8" p-id="41018"></path><path d="M708.1984 435.7632l153.856 128v175.7696c0 30.9248-17.9712 61.1328-58.2144 61.1328h-137.3184l69.0176 52.48h84.1216c20.8384 0 101.2224-28.7744 101.2224-120.064v-194.8672l-156.5696-120.7808-56.1152 18.3296z" fill="#7E5FE0" p-id="41019"></path><path d="M318.7712 368.4352m-84.1216 0a84.1216 84.1216 0 1 0 168.2432 0 84.1216 84.1216 0 1 0-168.2432 0Z" fill="#FFC5E7" p-id="41020"></path><path d="M300.3904 293.9904s57.6 20.6848 57.9584 75.2128c0.3072 45.824-34.5088 63.0784-75.4688 61.4912 26.4192 29.1328 119.7056 3.2256 120.7808-55.296s-50.688-91.904-103.2704-81.408z" fill="#FF99DD" p-id="41021"></path><path d="M795.6992 150.3232H243.6096c-80.2816 0-145.6128 65.3312-145.6128 145.6128v431.3088c0 3.0208 0.1024 6.0416 0.3072 9.0624-0.0512 0.7168-0.2048 1.4336-0.1536 2.2016a139.32544 139.32544 0 0 0 139.6736 134.3488H801.4848c77.1072 0 139.8272-62.72 139.8272-139.8272V295.936c0-80.2816-65.3312-145.6128-145.6128-145.6128z m-552.0896 40.96h552.0896c57.7024 0 104.6528 46.9504 104.6528 104.6528v207.7696l-97.4336-80.0768c-36.1472-29.696-88.9344-30.1056-125.5424-0.9216l-222.208 177.152-33.6384-28.2624c-36.3008-30.5152-89.5488-31.1296-126.5664-1.4848l-156.1088 125.0816V295.936c0.1024-57.7024 47.0528-104.6528 104.7552-104.6528z m0 640.6656c-51.2512 0-93.9008-37.0176-102.8608-85.7088l179.8656-144.128c21.8112-17.5104 53.1968-17.152 74.5984 0.8704l272.4352 228.9664H243.6096z m487.7312 0l-244.1216-205.2096 215.7568-171.9808c21.5552-17.2032 52.6848-16.9472 73.984 0.5632l123.4432 101.4272v170.496c0 57.7024-46.9504 104.6528-104.6528 104.6528h-64.4096z" fill="#211D38" p-id="41022"></path><path d="M318.7712 473.0368c57.7024 0 104.6016-46.8992 104.6016-104.6016s-46.9504-104.6016-104.6016-104.6016-104.6016 46.8992-104.6016 104.6016 46.8992 104.6016 104.6016 104.6016z m0-168.2432c35.072 0 63.6416 28.5696 63.6416 63.6416s-28.5696 63.6416-63.6416 63.6416-63.6416-28.5696-63.6416-63.6416 28.5184-63.6416 63.6416-63.6416z" fill="#211D38" p-id="41023"></path><path d="M151.0912 534.8864a12.8 12.8 0 0 1-12.8-12.8V287.1808c0-53.8624 43.8272-97.6896 97.6896-97.6896a12.8 12.8 0 0 1 0 25.6c-39.7312 0-72.0896 32.3584-72.0896 72.0896v234.9568c0 7.0144-5.7344 12.7488-12.8 12.7488zM330.6496 215.0912h-30.4128a12.8 12.8 0 0 1 0-25.6h30.4128a12.8 12.8 0 0 1 0 25.6zM271.0528 396.8512c-5.9904 0-11.3664-4.2496-12.544-10.3424-10.0864-52.0704 24.0128-74.2912 43.4176-78.7456a12.8 12.8 0 0 1 15.36 9.6256c1.5872 6.8608-2.6624 13.6704-9.5232 15.3088-5.376 1.3312-31.6416 10.0352-24.1152 48.9472 1.3312 6.9632-3.1744 13.6704-10.1376 15.0016-0.8192 0.1024-1.6384 0.2048-2.4576 0.2048zM176.128 745.2672c-3.7376 0-7.4752-1.6384-9.984-4.7616-4.4032-5.5296-3.5328-13.568 1.9456-17.9712l87.3984-70.1952c5.5296-4.4544 13.568-3.5328 17.9712 1.9456 4.4032 5.5296 3.5328 13.568-1.9456 17.9712l-87.3984 70.1952c-2.3552 1.8944-5.1712 2.816-7.9872 2.816zM291.3792 652.7488c-3.7376 0-7.4752-1.6384-9.984-4.7616-4.4032-5.5296-3.5328-13.568 1.9456-17.9712l16.0768-12.9024c5.5296-4.4544 13.568-3.5328 17.9712 1.9456 4.4032 5.5296 3.5328 13.568-1.9456 17.9712l-16.0768 12.9024c-2.304 1.8944-5.1712 2.816-7.9872 2.816zM546.8672 609.1264c-3.7376 0-7.4752-1.6384-9.984-4.7616-4.4032-5.5296-3.5328-13.568 1.9456-17.9712l87.4496-70.1952c5.5296-4.4032 13.568-3.5328 17.9712 1.9456 4.4032 5.5296 3.5328 13.568-1.9456 17.9712l-87.4496 70.1952c-2.3552 1.8944-5.1712 2.816-7.9872 2.816z" fill="#FFFFFF" p-id="41024"></path><path d="M664.576 514.6112c-3.7376 0-7.4752-1.6384-9.984-4.7616-4.4032-5.5296-3.5328-13.568 1.9456-17.9712l13.6192-10.9568c5.5296-4.4032 13.568-3.5328 17.9712 1.9456 4.4032 5.5296 3.5328 13.568-1.9456 17.9712l-13.6192 10.9568c-2.3552 1.8944-5.1712 2.816-7.9872 2.816z" fill="#FFFFFF" p-id="41025"></path></svg>'
                },
                {
                    name: '总浏览量',
                    count: 12312312,
                    svg: '<svg t="1718090877253" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59595" width="80" height="80"><path d="M938.666667 17.066667H85.333333C47.633067 17.066667 17.066667 47.633067 17.066667 85.333333v68.266667h989.866666V85.333333c0-37.700267-30.5664-68.266667-68.266666-68.266666zM221.866667 85.333333" fill="#006DF0" p-id="59596"></path><path d="M17.066667 153.6v785.066667c0 37.700267 30.5664 68.266667 68.266666 68.266666h853.333334c37.700267 0 68.266667-30.5664 68.266666-68.266666V153.6z m256 102.4a17.066667 17.066667 0 1 1 0-34.133333 17.066667 17.066667 0 0 1 0 34.133333z m0 0" fill="#FFCD00" p-id="59597"></path><path d="M290.133333 238.933333a17.066667 17.066667 0 1 1-34.133333 0 17.066667 17.066667 0 0 1 34.133333 0z m0 0" fill="#9BC9FF" p-id="59598"></path><path d="M204.8 563.2h68.266667v68.266667H204.8z m0 0" fill="#D80027" p-id="59599"></path><path d="M341.333333 460.8h68.266667v170.666667h-68.266667z m0 0" fill="#5EAC24" p-id="59600"></path><path d="M477.866667 494.933333h68.266666v136.533334h-68.266666z m0 0M750.933333 494.933333h68.266667v136.533334h-68.266667z m0 0" fill="#D80027" p-id="59601"></path><path d="M614.4 426.666667h68.266667v204.8h-68.266667z m0 0" fill="#5EAC24" p-id="59602"></path><path d="M1006.933333 375.466667v563.2c0 37.700267-30.5664 68.266667-68.266666 68.266666H119.466667c490.500267 0 887.466667-282.449067 887.466666-631.466666z m0 0" fill="#EBBF00" p-id="59603"></path><path d="M938.666667 0H85.333333C38.225067 0.0576 0.0576 38.225067 0 85.333333v853.333334c0.0576 47.108267 38.225067 85.275733 85.333333 85.333333h853.333334c47.108267-0.0576 85.275733-38.225067 85.333333-85.333333V85.333333c-0.0576-47.108267-38.225067-85.275733-85.333333-85.333333zM34.133333 85.333333c0-28.2752 22.9248-51.2 51.2-51.2h853.333334c28.2752 0 51.2 22.9248 51.2 51.2v51.2H34.133333z m955.733334 853.333334c0 28.2752-22.9248 51.2-51.2 51.2H85.333333c-28.2752 0-51.2-22.9248-51.2-51.2V170.666667h955.733334z m0 0" fill="#231F20" p-id="59604"></path><path d="M146.007467 304.3328l41.143466-27.424L238.933333 315.733333v25.6a17.066667 17.066667 0 0 0 17.066667 17.066667h51.2a17.066667 17.066667 0 0 0 0-34.133333h-34.133333v-17.066667c0-5.376-2.5344-10.432-6.826667-13.649067l-68.266667-51.2a17.0624 17.0624 0 0 0-19.714133-0.5504l-51.2 34.133334a17.070933 17.070933 0 0 0 18.948267 28.398933z m0 0" fill="#231F20" p-id="59605"></path><path d="M85.333333 443.733333a17.0688 17.0688 0 0 0 12.066134-5.000533l87.6928-87.690667 14.807466 22.190934-24.234666 24.234666a17.066667 17.066667 0 0 0 24.1344 24.132267l34.133333-34.133333a17.0752 17.0752 0 0 0 2.133333-21.5424l-34.133333-51.2a17.066667 17.066667 0 0 0-12.507733-7.509334 17.454933 17.454933 0 0 0-13.76 4.917334l-102.4 102.4a17.079467 17.079467 0 0 0-3.773867 18.651733A17.073067 17.073067 0 0 0 85.333333 443.733333z m0 0M307.2 238.933333c0 18.850133-15.2832 34.133333-34.133333 34.133334s-34.133333-15.2832-34.133334-34.133334 15.2832-34.133333 34.133334-34.133333 34.133333 15.2832 34.133333 34.133333z m0 0M392.533333 273.066667h17.066667a17.066667 17.066667 0 0 0 0-34.133334h-17.066667a17.066667 17.066667 0 0 0 0 34.133334z m0 0M460.8 273.066667h153.6a17.066667 17.066667 0 0 0 0-34.133334h-153.6a17.066667 17.066667 0 0 0 0 34.133334z m0 0M392.533333 324.266667h17.066667a17.066667 17.066667 0 0 0 0-34.133334h-17.066667a17.066667 17.066667 0 0 0 0 34.133334z m0 0M460.8 324.266667h119.466667a17.066667 17.066667 0 0 0 0-34.133334h-119.466667a17.066667 17.066667 0 0 0 0 34.133334z m0 0M682.666667 273.066667h17.066666a17.066667 17.066667 0 0 0 0-34.133334h-17.066666a17.066667 17.066667 0 0 0 0 34.133334z m0 0M750.933333 273.066667h153.6a17.066667 17.066667 0 0 0 0-34.133334h-153.6a17.066667 17.066667 0 0 0 0 34.133334z m0 0M682.666667 324.266667h187.733333a17.066667 17.066667 0 0 0 0-34.133334h-187.733333a17.066667 17.066667 0 0 0 0 34.133334z m0 0M324.266667 614.4h-34.133334v-51.2a17.066667 17.066667 0 0 0-17.066666-17.066667H204.8a17.066667 17.066667 0 0 0-17.066667 17.066667v51.2H153.6a17.066667 17.066667 0 0 0 0 34.133333h716.8a17.066667 17.066667 0 0 0 0-34.133333h-34.133333v-119.466667a17.066667 17.066667 0 0 0-17.066667-17.066666h-68.266667a17.066667 17.066667 0 0 0-17.066666 17.066666v119.466667h-34.133334v-187.733333a17.066667 17.066667 0 0 0-17.066666-17.066667h-68.266667a17.066667 17.066667 0 0 0-17.066667 17.066667v187.733333h-34.133333v-119.466667a17.066667 17.066667 0 0 0-17.066667-17.066666h-68.266666a17.066667 17.066667 0 0 0-17.066667 17.066666v119.466667h-34.133333v-153.6a17.066667 17.066667 0 0 0-17.066667-17.066667h-68.266667a17.066667 17.066667 0 0 0-17.066666 17.066667z m-102.4 0v-34.133333h34.133333v34.133333z m546.133333-102.4h34.133333v102.4h-34.133333z m-136.533333-68.266667h34.133333v170.666667h-34.133333z m-136.533334 68.266667h34.133334v102.4h-34.133334z m-136.533333-34.133333h34.133333v136.533333h-34.133333z m0 0M904.533333 921.6H136.533333v-51.2h68.266667a17.0688 17.0688 0 0 0 12.066133-5.000533l64.8512-64.849067 26.1824 91.5584c1.591467 5.589333 5.924267 9.984 11.492267 11.658667s11.607467 0.398933 16.017067-3.383467l102.865066-88.1664 24.349867 48.708267A17.0624 17.0624 0 0 0 477.866667 870.4h64.241066l64.667734 32.426667a17.056 17.056 0 0 0 20.4736-4.042667l104.1088-118.909867 39.150933 65.2672A17.0624 17.0624 0 0 0 785.066667 853.333333h68.266666a17.066667 17.066667 0 0 0 0-34.133333h-58.609066l-46.2336-77.058133a17.066667 17.066667 0 0 0-27.456-2.442667l-110.801067 126.600533-56.475733-28.241066A17.034667 17.034667 0 0 0 546.133333 836.266667h-57.717333L459.093333 777.442133a17.060267 17.060267 0 0 0-26.382933-5.3248l-99.2576 85.0752-26.833067-93.866666a17.047467 17.047467 0 0 0-12.117333-11.8336 17.092267 17.092267 0 0 0-16.349867 4.4416L197.7344 836.266667H136.533333v-102.4a17.066667 17.066667 0 0 0-34.133333 0v204.8a17.066667 17.066667 0 0 0 17.066667 17.066666h785.066666a17.066667 17.066667 0 0 0 0-34.133333z m0 0M102.4 68.266667h-17.066667a17.066667 17.066667 0 0 0 0 34.133333h17.066667a17.066667 17.066667 0 0 0 0-34.133333z m0 0M170.666667 68.266667h-17.066667a17.066667 17.066667 0 0 0 0 34.133333h17.066667a17.066667 17.066667 0 0 0 0-34.133333z m0 0M238.933333 68.266667h-17.066666a17.066667 17.066667 0 0 0 0 34.133333h17.066666a17.066667 17.066667 0 0 0 0-34.133333z m0 0" fill="#231F20" p-id="59606"></path></svg>'
                }
            ]
        }
    },
    actions: {}
});