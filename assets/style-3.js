// Initialize font properties
const fontname = "Source+Sans+3";
const fontweights = [300, 400]

// Color properties
const basecolor = "#000";
const accentcolor = "#000";
const highlightcolor = "#111";

// const basecolor = "#888";
// const accentcolor = "#222";
// const highlight = "#111";

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "12pt";
const backgroundcolor = "#FFFAF0";

// Link properties
const acolor = accentcolor;
const adecoration = "underline";
// const ahovercolor = accentcolor;
// const ahoverduration = "0.3s";
// const ahoverdecoration = "none"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Menu properties
const menucolor = basecolor;
const menufontsize = "15pt";
const menudecoration = "none";
// const menuhover = accentcolor;
// const menuhoverduration = "0.3s";
// const menuhoverdecoration = "none"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Header properties
const headercolor = accentcolor;
const headerfontsize = "18pt";
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "23pt";


// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = bodyfontweight;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = accentcolor;
const instyearsize = "11px";

//     .institution {
//             font - size: 12px;
//             color: #222;
//         }
//   .years {
//             font - size: 11px;
//             color: #888;
//         }

// Works for sans serif, change otherwise
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
$("body").css("font-family", fontname);

$(".header").css("color", headercolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);

$(".papertitle").css("color", ptitlecolor);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);


$(".institution").css("color", insttitlecolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);

// abstract button
/*$(document).ready(function () {
    $(".toggle-abstract").on("click", function () {
        $(this).closest("p").next(".abstract-content").slideToggle(200);
    });
});
*/

// ... all your existing code above ...

$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);

// abstract button
/*$(document).ready(function () {
    $(".toggle-abstract").on("click", function () {
        $(this).closest("p").next(".abstract-content").slideToggle(200);
    });
});
*/

// Filter functionality
$(document).ready(function() {
    const filterTags = $('.filter-tag');
    const publications = $('.publication-entry');
    
    filterTags.on('click', function() {
        const filterValue = $(this).attr('data-filter');
        
        // Toggle active state
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            // Show all publications
            publications.removeClass('hidden');
        } else {
            // Remove active from all tags
            filterTags.removeClass('active');
            // Add active to clicked tag
            $(this).addClass('active');
            
            // Filter publications
            publications.each(function() {
                const pubTags = $(this).attr('data-tags');
                if (pubTags && pubTags.includes(filterValue)) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            });
        }
    });
});