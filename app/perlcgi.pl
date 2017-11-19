#!/usr/bin/perl

use CGI;
use strict;
use warnings;
use WWW::YouTube::Download;

print "Content-Type: text/html\n\n";
print "<html> <head>\n";
print "<title>Download Ready!</title>";
print "</head>\n";
print "<body>\n";
print "<h1 style=\"text-align:center; margin:30px\">Download Ready !</h1>\n";
print "</body> </html>\n";


my $q = CGI->new();
my $a = $q->param('a');
my $timestamp = localtime(time);

my $tube = WWW::YouTube::Download->new;
my $video_id = $tube->video_id($a);
$tube->download($video_id, { filename => '../htdocs/downloads/'.$timestamp.'.mp4' });
